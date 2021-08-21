from rest_framework import viewsets, generics, permissions
from knox.auth import TokenAuthentication
from rest_framework.response import Response
from people.models import (
					Student,
				)
from people.serializers import (
						StudentCreateSerializer,
					)



class CreateStudentAPI(generics.GenericAPIView):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated, ]

	serializer_class = StudentCreateSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": StudentCreateSerializer(user, context=self.get_serializer_context()).data
			})
