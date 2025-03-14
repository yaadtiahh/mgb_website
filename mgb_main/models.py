from django.db import models


class CustomMovie(models.Model):
    api_id = models.CharField(max_length=100, unique=True, help_text="ID фильма из API")
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='static/imgs/movies_images', blank=True, null=True, verbose_name='Изображение Категории')

    description = models.TextField(blank=True)
    release_date = models.DateField()

    def __str__(self):
        return self.title


class CustomGame(models.Model):
    api_id = models.CharField(max_length=100, unique=True, help_text="ID игры из API")
    title = models.CharField(max_length=255)
    background_game = models.ImageField(upload_to='static/imgs/games_images', blank=True, null=True, verbose_name='Бг Игры')
    logotype_game = models.ImageField(upload_to='static/imgs/games_images', blank=True, null=True, verbose_name='Лого игры')
    description = models.TextField(blank=True)
    release_date = models.DateField()

    def __str__(self):
        return self.title
