from django.urls import path

from rest_framework import routers
from .views import BookingView, getRoutes



router = routers.SimpleRouter()
router.register(r'bookings', BookingView)


urlpatterns = [
    path("",getRoutes)
]


urlpatterns += router.urls

