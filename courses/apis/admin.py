from rest_framework import viewsets
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
			AddTextToNote,
			AddImageToNote,
			AddFileToNote,
			AddVideoToNote,
			AddBibliography,
			Course,
			TopicObjective,
			AddTopicObjective,
			TopicGuideLine,
			AddTopicGuideline,
			Topic,
			SubTopic,
			Review,
			StudentCourseEnrollment,
			AddCourseToSchool,
			Author,
			PublisherCity,
			Publisher,
			ReferrenceSource,

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
			ItSubTopicCreateUpdateSerializer
			ItTopicListSerializer,
			ItTopicCreateUpdateSerializer,
			ItTopicDetailSerializer,
			ItTopicObjectiveCreateUpdateSerializer,
			ItTopicObjectiveListDetailSerializer,
			ItTopicGuidelineCreateUpdateSerializer,
			ItTopicGuidelineListDetailSerializer,
			ItReviewListDetailSerializer,
			ItReviewCreateUpdateSerializer,

	)



class AdminCourseViewSet(viewsets.ModelViewSet):



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItCourseCreateUpdateSerializer
		elif self.action == 'retrieve':
			return ItCourseDetailSerializer
		return ItCourseListSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Course.objects.all()
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
				ComplexQueryLookUp(description__icontains=deep_query) |
            )
		return queryset


def get_course(course_id):
	course = get_object_or_404(Course, id=course_id)
	return course


class AdminTopicViewSet(viewsets.ModelViewSet):

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update', 'create']:
			return ItTopicCreateUpdateSerializer
		return ItTopicDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Topic.objects.all().all().prefetch_related(
												'course',
												'guidelines',
												'objectives'
										).order_by('-id')

		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(course__full_name__icontains=deep_query) |
                ComplexQueryLookUp(title__icontains=deep_query) |
				ComplexQueryLookUp(course__short_name__icontains=deep_query) |
				ComplexQueryLookUp(content_overview__icontains=deep_query) |
				ComplexQueryLookUp(assessment_overview__icontains=deep_query)
            )

		course_id = self.request.query_params.get('id', None)
		if course_id is not None:
			course = get_course(course_id=course_id)
			queryset = course.topics.all().prefetch_related(
													'course',
													'guidelines',
													'objectives'
											).order_by('-id')
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(course__full_name__icontains=deep_query) |
	                ComplexQueryLookUp(title__icontains=deep_query) |
					ComplexQueryLookUp(course__short_name__icontains=deep_query) |
					ComplexQueryLookUp(content_overview__icontains=deep_query) |
					ComplexQueryLookUp(assessment_overview__icontains=deep_query)
	            )
		return queryset

class AdminReviewViewSet(viewsets.ModelViewSet):

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

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return ItSubTopicCreateUpdateSerializer
		return ItSubTopicListSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = SubTopic.objects.all().select_related(
												'topic'
											).order_by('-id')
		deep_query = self.request.query_params.get('q', None)
		if deep_query:
			queryset = queryset.filter(
                ComplexQueryLookUp(title__contains=deep_query) |
                ComplexQueryLookUp(topic__title__icontains=deep_query)
            )
		topic_id = self.request.query_params.get('id', None)
		if topic_id is not None:
			topic = get_topic(topic_id=topic_id)
			queryset = topic.subtopics.all().select_related(
													'topic'
												).order_by('-id')
			if deep_query:
				queryset = queryset.filter(
	                ComplexQueryLookUp(title__contains=deep_query) |
	                ComplexQueryLookUp(topic__title__icontains=deep_query)
	            )
		return queryset

def get_subtopic(subtopic_id):
	subtopic = get_object_or_404(SubTopic, id=subtopic_id)
	return subtopic


class AdminStudyNoteViewSet(viewsets.ModelVieSet):
	pass
