from django.shortcuts import render, redirect
from django.contrib import auth
from django.http import HttpResponseRedirect
from users.forms import UserLoginForm, UserRegistrationForm, ProfileForm
from django.urls import reverse
from django.contrib.auth.decorators import login_required


def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('index'))

    if request.method == 'POST':
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = auth.authenticate(username=username, password=password)
            if user:
                auth.login(request, user)

                # Проверяем чекбокс "Remember me"
                remember_me = request.POST.get("remember_me")
                if not remember_me:
                    request.session.set_expiry(0)  # Сессия закроется при закрытии браузера

                return HttpResponseRedirect(reverse('index'))
    else:
        form = UserLoginForm()

    context = {
        'title': 'index - Авторизация',
        'form': form
    }
    return render(request, 'login.html', context)


def register(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('index'))
    if request.method == 'POST':
        form = UserRegistrationForm(data=request.POST)
        if form.is_valid():
            form.save()
            user = form.instance
            auth.login(request, user)
            return HttpResponseRedirect(reverse('index'))
    else:
        form = UserRegistrationForm()
    context: dict[str, str] = {
        'title': 'index - Регистрация',
        'form': form,
    }
    return render(request, 'register.html', context)


@login_required
def profile(request):
    user = request.user  # Получаем текущего пользователя

    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=user)

        if form.is_valid():
            form.save(commit=False)  # Не сохраняем сразу, чтобы избежать ошибок
            user.username = form.cleaned_data.get("username", user.username)  # Обновляем только если есть данные
            user.email = form.cleaned_data.get("email", user.email)
            user.avatar = form.cleaned_data.get("avatar", user.avatar)
            user.header = form.cleaned_data.get("header", user.header)
            user.bio = form.cleaned_data.get("bio", user.bio)
            user.save()  # Теперь сохраняем без создания нового пользователя
            return redirect('profile')

    else:
        form = ProfileForm(instance=user)

    return render(request, 'profile.html', {'form': form, 'profile': user})


def logout(request):
    auth.logout(request)
    return redirect(reverse('index'))
