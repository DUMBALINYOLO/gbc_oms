from rest_framework import viewsets, generics, permissions, status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Q as ComplexQueryLookUp

from courses.models import (
			Text,
			File,
			Image,
			Video,
			StudyNote,
			Course,
			TopicObjective,
			TopicGuideLine,
			Topic,
			SubTopic,
			Review,
			StudentCourseEnrollment,
			Author,
			PublisherCity,
			Publisher,
			ReferrenceSource,
			LessonSlide,
		)

from courses.serializers import (
			ItCourseCreateUpdateSerializer,
			ItCourseListSerializer,
			ItCourseDetailSerializer,
			ItTopicListSerializer,
			ItTextListDetailSerializer,
			ItReferenceSourceListDetailSerializer,
			ItVideoListDetailSerializer,
			ItFileListDetailSerializer,
			ItImageListDetailSerializer,
			ItStudyNoteListSerializer,
			ItStudyNoteDetailSerializer,
			ItSubTopicListSerializer,
			ItSubTopicCreateUpdateSerializer,
			ItTopicListSerializer,
			ItTopicCreateUpdateSerializer,
			ItTopicDetailSerializer,
			ItTopicObjectiveCreateUpdateSerializer,
			ItTopicObjectiveListDetailSerializer,
			ItTopicGuidelineCreateUpdateSerializer,
			ItTopicGuidelineListDetailSerializer,
			ItReviewListDetailSerializer,
			ItReviewCreateUpdateSerializer,
			ItStudyNoteDetailSerializer,
			ItStudyNoteCreateUpdateSerializer,
			ItStudyNoteCreateUpdateSerializer,
			ItTextCreateUpdateSerializer,
			ItTextListDetailSerializer,
			ItFileCreateUpdateSerializer,
			ItFileListDetailSerializer,
			ItImageCreateUpdateSerializer,
			ItVideoCreateUpdateSerializer,
			ItStudyNoteCreateUpdateSerializer,
			ItReferenceSourceCreateUpdateSerializer,
			ItReferenceSourceListDetailSerializer,
			ItCreateUpdateAuthorSerializer,
			ItListAuthorSerializer,
			ItPublisherCreateUpdateSerializer,
			ItPublisherListSerializer,
			ItPublisherCityCreateUpdateSerializer,
			ItPublisherCityListSerializer,
			StudentCourseEnrollmentCreateUpdateSerializer,
			StudentCourseEnrollmentListDetailSerializer,
			LessonSlideCreateUpdateSerializer,
			LessonSlideListDetailSerializer,


	)



def get_note(note_id):
	note = get_object_or_404(StudyNote, id=note_id)
	return note


def get_course(course_id):
	course = get_object_or_404(Course, id=course_id)
	return course


class AdminUpcomingCourseViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)#SessionAuthentication, BasicAuthentication)
	permission_classes = [permissions.AllowAny,]



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItCourseCreateUpdateSerializer
		return ItCourseDetailSerializer


	def create(self, request, *args, **kwargs):
		draft_request_data = request.data.copy()

		draft_request_data["status"] = 'upcoming'
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)



	def get_queryset(self, *args, **kwargs):
		a = []
		for key, value, in self.request.headers.items():
			a.append({'key': key, 'value': value})
		print(a)
		queryset = Course.objects.filter(
								~ComplexQueryLookUp(status__in=['ongoing', 'finished', 'inactive'])
							)
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
				ComplexQueryLookUp(stream__icontains=deep_query) |
				ComplexQueryLookUp(full_name__icontains=deep_query) |
				ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(course_visibility__icontains=deep_query) |
				ComplexQueryLookUp(status__icontains=deep_query) |
				ComplexQueryLookUp(overview__icontains=deep_query) |
				ComplexQueryLookUp(created__icontains=deep_query) |
				ComplexQueryLookUp(start_date__icontains=deep_query) |
				ComplexQueryLookUp(end_date__icontains=deep_query) |
				ComplexQueryLookUp(course_number__icontains=deep_query) |
				ComplexQueryLookUp(description__icontains=deep_query)
			)
		return queryset



class AdminOngoingCourseViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItCourseCreateUpdateSerializer
		return ItCourseDetailSerializer

	def create(self, request, *args, **kwargs):
		draft_request_data = request.data.copy()
		draft_request_data["status"] = 'ongoing'
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)




	def get_queryset(self, *args, **kwargs):
		queryset = Course.objects.filter(
								~ComplexQueryLookUp(status__in=['upcoming', 'finished', 'inactive'])
							)
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
			    ComplexQueryLookUp(stream__icontains=deep_query) |
			    ComplexQueryLookUp(full_name__icontains=deep_query) |
			    ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(course_visibility__icontains=deep_query) |
				ComplexQueryLookUp(status__icontains=deep_query) |
				ComplexQueryLookUp(overview__icontains=deep_query) |
				ComplexQueryLookUp(created__icontains=deep_query) |
				ComplexQueryLookUp(course_number__icontains=deep_query) |
				ComplexQueryLookUp(description__icontains=deep_query)
			)
		return queryset


class AdminFinishedCourseViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItCourseCreateUpdateSerializer
		return ItCourseDetailSerializer

	def create(self, request, *args, **kwargs):
		draft_request_data = request.data.copy()
		draft_request_data["status"] = 'finished'
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)




	def get_queryset(self, *args, **kwargs):
		queryset = Course.objects.filter(
								~ComplexQueryLookUp(status__in=['upcoming', 'ongoing', 'inactive'])
							)
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
			    ComplexQueryLookUp(stream__icontains=deep_query) |
			    ComplexQueryLookUp(full_name__icontains=deep_query) |
			    ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(course_visibility__icontains=deep_query) |
				ComplexQueryLookUp(status__icontains=deep_query) |
				ComplexQueryLookUp(overview__icontains=deep_query) |
				ComplexQueryLookUp(created__icontains=deep_query) |
				ComplexQueryLookUp(start_date__icontains=deep_query) |
				ComplexQueryLookUp(end_date__icontains=deep_query) |
				ComplexQueryLookUp(course_number__icontains=deep_query) |
				ComplexQueryLookUp(description__icontains=deep_query)
			)
		return queryset


class AdminInactiveCourseViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItCourseCreateUpdateSerializer
		return ItCourseDetailSerializer


	def create(self, request, *args, **kwargs):
		draft_request_data = request.data.copy()
		draft_request_data["status"] = 'inactive'
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)




	def get_queryset(self, *args, **kwargs):
		queryset = Course.objects.filter(
								~ComplexQueryLookUp(status__in=['upcoming', 'ongoing', 'finished'])
							)
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
			    ComplexQueryLookUp(stream__icontains=deep_query) |
			    ComplexQueryLookUp(full_name__icontains=deep_query) |
			    ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(short_name__icontains=deep_query) |
				ComplexQueryLookUp(course_visibility__icontains=deep_query) |
				ComplexQueryLookUp(status__icontains=deep_query) |
				ComplexQueryLookUp(overview__icontains=deep_query) |
				ComplexQueryLookUp(created__icontains=deep_query) |
				ComplexQueryLookUp(start_date__icontains=deep_query) |
				ComplexQueryLookUp(end_date__icontains=deep_query) |
				ComplexQueryLookUp(course_number__icontains=deep_query) |
				ComplexQueryLookUp(description__icontains=deep_query)
			)
		return queryset



class LessonSlideViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'patch', 'put', 'updating']:
			return LessonSlideCreateUpdateSerializer
		return LessonSlideListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = LessonSlide.objects.all()
		course_id = self.request.query_params.get('id', None)
		if course_id is not None:
			course = get_course(course_id=course_id)
			queryset = course.slides.order_by('-id')
		return queryset





class StudentCourseEnrollementViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'patch', 'put', 'updating']:
			return StudentCourseEnrollmentCreateUpdateSerializer
		return StudentCourseEnrollmentListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = StudentCourseEnrollment.objects.select_related(
														'course',
														'student'
													).order_by('-id')
		course_id = self.request.query_params.get('id', None)
		if course_id is not None:
			course = get_course(course_id=course_id)
			queryset = course.studentcourseenrollment_set.select_related(
																'course',
																'student'
															).order_by('-id')
		return queryset


class AdminTopicViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItTopicCreateUpdateSerializer
		return ItTopicDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Topic.objects.prefetch_related(
												'guidelines',
												'objectives'
										).order_by('-id')

		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__icontains=deep_query) |
				ComplexQueryLookUp(content_overview__icontains=deep_query) |
				ComplexQueryLookUp(assessment_overview__icontains=deep_query)
            )


		course_id = self.request.query_params.get('id', None)
		if course_id is not None:
			course = get_course(course_id=course_id)
			queryset = course.topics.prefetch_related(
													'guidelines',
													'objectives'
											).order_by('-id')
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__icontains=deep_query) |
					ComplexQueryLookUp(content_overview__icontains=deep_query) |
					ComplexQueryLookUp(assessment_overview__icontains=deep_query)
	            )
		return queryset

class AdminReviewViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItReviewCreateUpdateSerializer
		return ItReviewListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Reveiw.objects.all().prefetch_related(
												'course',
												'reviewer'
										).order_by('-id')

		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(course__full_name__icontains=deep_query) |
                ComplexQueryLookUp(pub_date__icontains=deep_query) |
				ComplexQueryLookUp(reviewer__user__username__icontains=deep_query) |
				ComplexQueryLookUp(comment__icontains=deep_query) |
				ComplexQueryLookUp(rating__icontains=deep_query)
            )

		course_id = self.request.query_params.get('id', None)
		if course_id is not None:
			course = get_course(course_id=course_id)
			queryset = course.reviews.all().prefetch_related(
													'course',
													'reviewer'
											).order_by('-id')
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(course__full_name__icontains=deep_query) |
	                ComplexQueryLookUp(pub_date__icontains=deep_query) |
					ComplexQueryLookUp(reviewer__user__username__icontains=deep_query) |
					ComplexQueryLookUp(comment__icontains=deep_query) |
					ComplexQueryLookUp(rating__icontains=deep_query)
	            )
		return queryset



def get_topic(topic_id):
	topic = get_object_or_404(Topic, id=topic_id)
	return topic

class AdminTopicObjectivesViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItTopicObjectiveCreateUpdateSerializer
		return ItTopicObjectiveListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = TopicObjective.objects.all()
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(name__icontains=deep_query) |
                ComplexQueryLookUp(description__icontains=deep_query)
            )
		topic_id = self.request.query_params.get('id', None)
		if topic_id is not None:
			topic = get_topic(topic_id=topic_id)
			queryset = topic.objectives.all()
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(name__icontains=deep_query) |
	                ComplexQueryLookUp(description__icontains=deep_query)
	            )
		return queryset



class AdminTopicGuidelineViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItTopicGuidelineCreateUpdateSerializer
		return ItTopicGuidelineListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = TopicGuideLine.objects.all()
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(name__icontains=deep_query) |
                ComplexQueryLookUp(description__icontains=deep_query)
            )
		topic_id = self.request.query_params.get('id', None)
		if topic_id is not None:
			topic = get_topic(topic_id=topic_id)
			queryset = topic.guidelines.all()
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(name__icontains=deep_query) |
	                ComplexQueryLookUp(description__icontains=deep_query)
	            )
		return queryset


class AdminSubTopicViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItSubTopicCreateUpdateSerializer
		return ItSubTopicListSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = SubTopic.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__contains=deep_query) |
                ComplexQueryLookUp(topic__title__icontains=deep_query)
            )
		topic_id = self.request.query_params.get('id', None)
		if topic_id is not None:
			topic = get_topic(topic_id=topic_id)
			queryset = topic.subtopics.all().order_by('-id')
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__contains=deep_query) |
	                ComplexQueryLookUp(topic__title__icontains=deep_query)
	            )
		return queryset

def get_subtopic(subtopic_id):
	subtopic = get_object_or_404(SubTopic, id=subtopic_id)
	return subtopic



class AdminStudyNoteViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'update', 'put', 'patch']:
			return ItStudyNoteCreateUpdateSerializer
		return ItStudyNoteListSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = StudyNote.objects.prefetch_related(
												'references',
												'videos',
												'files',
												'notes',
												'images',
											).order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
                ComplexQueryLookUp(topic__title__icontains=deep_query)|
				ComplexQueryLookUp(title__icontains=deep_query)|
				ComplexQueryLookUp(status__icontains=deep_query)|
				ComplexQueryLookUp(approval_status__icontains=deep_query)|
				ComplexQueryLookUp(note__icontains=deep_query)

            )
		subtopic_id = self.request.query_params.get('id', None)
		if subtopic_id is not None:
			topic = get_subtopic(subtopic_id=subtopic_id)
			queryset = topic.notes.prefetch_related(
											'references',
											'videos',
											'files',
											'notes',
											'images',
										).order_by('-id')
			if deep_query is not None:
				queryset = queryset.filter(
					ComplexQueryLookUp(title__icontains=deep_query)|
					ComplexQueryLookUp(status__icontains=deep_query)|
					ComplexQueryLookUp(approval_status__icontains=deep_query)|
					ComplexQueryLookUp(note__icontains=deep_query)

	            )
		return queryset



class AdminImageViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'update', 'put', 'patch']:
			return ItImageCreateUpdateSerializer
		return ItImageListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Image.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__icontains=deep_query)
            )
		note_id = self.request.query_params.get('q', None)
		if note_id is not None:
			note = get_note(note_id=note_id)
			queryset = note.images.all().order_by('-id')
			if deep_query is not None:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__icontains=deep_query)
	            )

		return queryset





class AdminNoteViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'update', 'put', 'patch']:
			return ItTextCreateUpdateSerializer
		return ItTextListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Text.objects.all()

		note_id = self.request.query_params.get('id', None)
		if note_id is not None:
			note = get_note(note_id=note_id)
			queryset = note.notes.all()
		return queryset




class AdminFileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'update', 'put', 'patch']:
			return ItFileCreateUpdateSerializer
		return ItFileListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = File.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__icontains=deep_query)
            )
		note_id = self.request.query_params.get('q', None)
		if note_id is not None:
			note = get_note(note_id=note_id)
			queryset = note.files.all().order_by('-id')
			if deep_query is not None:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__icontains=deep_query)
	            )

		return queryset


class AdminVideoViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'update', 'put', 'patch']:
			return ItVideoCreateUpdateSerializer
		return ItVideoListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Video.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__icontains=deep_query)
            )
		note_id = self.request.query_params.get('q', None)
		if note_id is not None:
			note = get_note(note_id=note_id)
			queryset = note.videos.all().order_by('-id')
			if deep_query is not None:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__icontains=deep_query)
	            )

		return queryset

class AdminReferenceViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'update', 'put', 'patch']:
			return ItReferenceSourceCreateUpdateSerializer
		return ItReferenceSourceListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = ReferrenceSource.objects.all().order_by('-id').select_related(
					'author',
					'publisher'

				)
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__icontains=deep_query)|
				ComplexQueryLookUp(author__name__icontains=deep_query)|
				ComplexQueryLookUp(publisher__name__icontains=deep_query)|
				ComplexQueryLookUp(date_published__icontains=deep_query)
            )
		note_id = self.request.query_params.get('q', None)
		if note_id is not None:
			note = get_note(note_id=note_id)
			queryset = note.references.all().order_by('-id').select_related(
						'author',
						'publisher'

					).select_related(
								'author',
								'publisher'

							)
			if deep_query is not None:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__icontains=deep_query)|
					ComplexQueryLookUp(author__name__icontains=deep_query)|
					ComplexQueryLookUp(publisher__name__icontains=deep_query)|
					ComplexQueryLookUp(date_published__icontains=deep_query)
	            ).select_related(
							'author',
							'publisher'

						)
		return queryset


class AdminAuthorViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItCreateUpdateAuthorSerializer
		return ItListAuthorSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Author.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
							ComplexQueryLookUp(name__icontains=deep_query) |
							ComplexQueryLookUp(author_number__icontains=deep_query)
						)

		return queryset


class AdminPublisherCityViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItPublisherCityCreateUpdateSerializer
		return ItPublisherCityListSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = PublisherCity.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
							ComplexQueryLookUp(name__icontains=deep_query) |
							ComplexQueryLookUp(number__icontains=deep_query)
						)

		return queryset


class AdminPublisherViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItPublisherCreateUpdateSerializer
		return ItPublisherListSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Publisher.objects.all().order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query is not None:
			queryset = queryset.filter(
							ComplexQueryLookUp(name__icontains=deep_query) |
							ComplexQueryLookUp(number__icontains=deep_query)|
							ComplexQueryLookUp(city__name__icontains=deep_query)
						)
		return queryset
