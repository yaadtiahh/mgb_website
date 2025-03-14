"""
URL configuration for mgbapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from mgb_main import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.home_view, name="home"),  # Главная страница с редиректом
    path("index/", views.index_view, name="index"),  # Настоящая главная для авторизованных

    path("movies/", views.movies, name="movies"),
    # path('movies/<str:movie_id>/', views.movie_detail, name='movie_detail'),

    path("games/", views.games, name="games"),
    path("books/", views.movies, name="movies"),

    path('admin/', admin.site.urls),

    path('user/', include('users.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
