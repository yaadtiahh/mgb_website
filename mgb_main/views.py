import requests
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import CustomMovie, CustomGame


def home_view(request):
    if request.user.is_authenticated:
        return redirect("index")
    return render(request, "index_preview.html")


@login_required
def index_view(request):
    return render(request, "index.html")


def profile(request):
    return render(request, 'profile.html')


def sign_page(request):
    return render(request, 'sign_page.html')


def movies(request):
    movies = CustomMovie.objects.all()
    return render(request, 'movies_list.html', {'movies': movies})


# def movie_detail_view(request, movie_id):
#     # Сначала ищем в локальной базе
#     movie = CustomMovie.objects.filter(api_id=movie_id).first()

#     if movie:
#         context = {
#             "title": movie.title,
#             "image": movie.image,
#             "description": movie.description,
#             "release_date": movie.release_date,
#             "from_api": False,  # Фильм из локальной БД
#         }
#     else:
#         # Если фильма нет в БД, делаем запрос в API
#         response = requests.get(f"{API_URL}{movie_id}")
#         if response.status_code == 200:
#             data = response.json()
#             context = {
#                 "title": data.get("title"),
#                 "image": data.get("image_url"),
#                 "description": data.get("description"),
#                 "release_date": data.get("release_date"),
#                 "from_api": True,  # Фильм из API
#             }
#         else:
#             return render(request, "404.html")

#     return render(request, "movie_detail.html", context)


def games(request):
    games = CustomGame.objects.all()
    return render(request, 'games_list.html', {'games': games})


def books(request):
    return render(request, 'books_list.html')
