from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from knox.auth import TokenAuthentication
from notifications.models import Notification
from notifications.serializers import NotificationSerialializer


class UnreadNotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication, ]
    serializer_class = NotificationSerialializer
    queryset = Notification.objects.filter(
                                    read= False
                                )

    @action(detail=True, methods=['get', 'post', 'list'])
    def read(self, request, *args, **kwargs):
        try:
            notification = self.get_object()
            notification.read = True
            notification.save()
            return Response({'msg': 'Notification seen'})
        except:
            return Response({'msg': 'Something seems to be wrong'})



class ReadNotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication, ]
    serializer_class = NotificationSerialializer
    queryset = Notification.objects.filter(
                                    read= True
                                )                   

