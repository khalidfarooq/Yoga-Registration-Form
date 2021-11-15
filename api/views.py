from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Booking
from .serializers import BookingSerializer
from api import serializers
from .utils import getBookingsList, getBookingDetail, createBooking, updateBooking

from .serializers import BookingSerializer
from .models import Booking
from rest_framework import views, viewsets




@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': 'http://127.0.0.1:8000/api/bookings/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of booking'
        },
        {
            'Endpoint': '/booking/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new booking with data sent in post request'
        },
        {
            'Endpoint': '/booking/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing booking with data sent in post request'
        },
    ]
    return Response(routes)


class BookingView(viewsets.ModelViewSet):
	serializer_class = BookingSerializer
	queryset = Booking.objects.all()




# # /booking GET
# # /booking POST
# # /booking/<id> PUT

# @api_view(['GET', 'POST'])
# def getbookings(request):

#     if request.method == 'GET':
#         return getBookingsList(request)

#     if request.method == 'POST':
#         return createBooking(request)


# @api_view(['GET', 'PUT', 'DELETE'])
# def getbooking(request, pk):

#     if request.method == 'GET':
#         return getBookingDetail(request, pk)

#     if request.method == 'PUT':
#         return updateBooking(request, pk)


