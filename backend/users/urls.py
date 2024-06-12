from django import urls
from django.urls import path
from .views import UserList, UserDetail, helloWorld, send_email_to_user

urlpatterns = [
    path('users/', UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('hello/', helloWorld, name='hello-world'),
    path('users/send-email/<int:user_id>/', send_email_to_user, name='send-email'),
] 