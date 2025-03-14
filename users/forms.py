from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm, UserChangeForm
from .models import User


class UserLoginForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={"autofocus": True,
                                      "placeholder": "Login"})
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"autocomplete": "current-password",
                                          "placeholder": "Password"})
    )

    class Meta:
        model = User


class UserRegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = {
            "username",
            "email",
            "password1",
            "password2",
        }

    username = forms.CharField(
        widget=forms.TextInput(attrs={"placeholder": "Login"})
    )

    email = forms.CharField(
        widget=forms.EmailInput(attrs={"placeholder": "Email"})
    )

    password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={"autocomplete": "current-password",
                                          "placeholder": "Password"}),
    )

    password2 = forms.CharField(
        widget=forms.PasswordInput(attrs={"autocomplete": "current-password",
                                          "placeholder": "Current password"}),
    )


class ProfileForm(UserChangeForm):
    class Meta:
        model = User
        fields = ("username", "email", "avatar", "bio", "header")

    username = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "Login"})
    )

    email = forms.CharField(
        required=False,
        widget=forms.EmailInput(attrs={"placeholder": "Email"})
    )

    avatar = forms.ImageField(required=False)
    header = forms.ImageField(required=False)

    bio = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={"placeholder": "Write something about yourself...", "rows": 3})
    )
