from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from rest_framework import generics
from .serializer import UserSerializer
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import User

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def helloWorld(HttpRequest):
    return HttpResponse("Hello World")

@api_view(['POST'])
def send_email_to_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
        # Utilisation d'une f-string pour inclure la valeur de user_id
        email_body = f'Bonjour, votre id est {user_id}'
        send_mail(
            'Cette email est pour vous',
            email_body,
            'ahmedsidimohammed78@gmail.com',
            [user.email],
            fail_silently=False,
        )
        return JsonResponse({'success': True, 'message': 'Email envoyé avec succès'})
    except User.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Utilisateur non trouvé'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)