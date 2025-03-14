from django.contrib import admin
from .models import CustomMovie, CustomGame


@admin.register(CustomMovie)
class CustomMovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'release_date')
    list_filter = ('title', 'release_date')
    search_fields = ('title',)


@admin.register(CustomGame)
class CustomGameAdmin(admin.ModelAdmin):
    list_display = ('title', 'release_date')
    list_filter = ('title', 'release_date')
    search_fields = ('title',)
