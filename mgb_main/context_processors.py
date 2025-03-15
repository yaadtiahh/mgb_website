def profile_context(request):
    if request.user.is_authenticated:
        return {
            "profile": {
                "username": request.user.username,
                "email": request.user.email
            }
        }
    return {}
