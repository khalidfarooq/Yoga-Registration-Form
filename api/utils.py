from rest_framework.response import Response
from .models import Booking
from .serializers import BookingSerializer


def getBookingsList(request):
    Bookings = Booking.objects.all().order_by('-id')
    serializer = BookingSerializer(Bookings, many=True)
    return Response(serializer.data)


def getBookingDetail(request, pk):
    Bookings = Booking.objects.get(id=pk)
    serializer = BookingSerializer(Bookings, many=False)
    return Response(serializer.data)


def createBooking(request):
    data = request.data
    booking_curr = Booking.objects.create(
        body=data['body']
    )
    serializer = BookingSerializer(booking_curr, many=False)
    return Response(serializer.data)

def updateBooking(request, pk):
    data = request.data
    booking_curr = Booking.objects.get(id=pk)
    serializer = BookingSerializer(instance=booking_curr, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data

