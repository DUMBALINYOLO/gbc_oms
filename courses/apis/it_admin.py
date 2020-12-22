from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from courses.models import (
		Course,
		Text,
		Image,
		Video,
		Topic,
		StudyNote,
		SubTopic


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
			ItSubTopicDetailSerializer,
			ItTopicListSerializer,

	)



class CourseItViewViewSet(viewsets.ModelViewSet):

	queryset = Course.objects.all()

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['CREATE', 'PUT']:
			return ItCourseCreateUpdateSerializer
		elif self.action == 'retrieve':
			return ItCourseDetailSerializer
		return ItCourseListSerializer



	@action(methods=['GET',], detail=True)
	def get_topics(self, *args, **kwargs):
	    course = self.get_object()
	    topics = course.topics.all()
	    searialized_data = ItTopicListSerializer(topics, many=True)
	    return Response(searialized_data.data)


	@action(methods=['GET',], detail=True)
	def get_images(self, *args, **kwargs):
		images = []
		course = self.get_object()
		topics = course.topics.all()
		for topic in topics:
			for suptopic in topic.subtopics.all():
				for note in suptopic.notes.all():
					for image in note.images.all():
						images.append(image)
		searialized_data = ItImageListDetailSerializer(images, many=True)
		return Response(searialized_data.data)


	@action(methods=['GET',], detail=True)
	def get_videos(self, *args, **kwargs):
		videos = []
		course = self.get_object()
		topics = course.topics.all()
		for topic in topics:
			for suptopic in topic.subtopics.all():
				for note in suptopic.notes.all():
					for video in note.videos.all():
						videos.append(video)
		searialized_data = ItVideoListDetailSerializer(videos, many=True)
		return Response(searialized_data.data)



	@action(methods=['GET',], detail=True)
	def get_notes(self, *args, **kwargs):
		notes = []
		course = self.get_object()
		topics = course.topics.all()
		for topic in topics:
			for suptopic in topic.subtopics.all():
				for note in suptopic.notes.all():
					for note in note.notes.all():
						notes.append(note)
		searialized_data = ItTextListDetailSerializer(notes, many=True)
		return Response(searialized_data.data)


	@action(methods=['GET',], detail=True)
	def get_files(self, *args, **kwargs):
		files = []
		course = self.get_object()
		topics = course.topics.all()
		for topic in topics:
			for suptopic in topic.subtopics.all():
				for note in suptopic.notes.all():
					for file in note.files.all():
						files.append(file)
		searialized_data = ItFileListDetailSerializer(files, many=True)
		return Response(searialized_data.data)


	@action(methods=['GET',], detail=True)
	def get_references(self, *args, **kwargs):
		bibliography = []
		course = self.get_object()
		topics = course.topics.all()
		for topic in topics:
			for suptopic in topic.subtopics.all():
				for note in suptopic.notes.all():
					for refr in note.references.all():
						bibliography.append(refr)
		searialized_data = ItReferenceSourceListDetailSerializer(bibliography, many=True)
		return Response(searialized_data.data)



class ItTopicViewViewSet(viewsets.ModelViewSet):
	queryset = Topic.objects.all()
	serializer_class = ItTopicListSerializer




class ItSubtopicViewViewSet(viewsets.ModelViewSet):
	queryset = SubTopic.objects.all()
	serializer_class = ItSubTopicDetailSerializer



class ItStudyNoteViewViewSet(viewsets.ModelViewSet):
	queryset = StudyNote.objects.all()
	serializer_class = ItStudyNoteDetailSerializer




class ItImageViewViewSet(viewsets.ModelViewSet):
	queryset = Image.objects.all()
	serializer_class = ItImageListDetailSerializer



class ItVideoViewViewSet(viewsets.ModelViewSet):
	queryset = Video.objects.all()
	serializer_class = ItVideoListDetailSerializer


class ItNotesViewViewSet(viewsets.ModelViewSet):
	queryset = Text.objects.all()
	serializer_class = ItTextListDetailSerializer

























