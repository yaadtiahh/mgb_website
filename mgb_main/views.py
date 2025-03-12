from django.shortcuts import render


def index(request):
    return render(request, 'index_preview.html')


def profile(request):
    return render(request, 'profile.html')


def sign_page(request):
    return render(request, 'sign_page.html')
