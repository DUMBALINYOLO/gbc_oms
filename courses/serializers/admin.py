from rest_framework import serializers
from django.shortcuts import get_object_or_404
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

		)
from setup.models import Institution
from people.models import Student
from .images import Base64ImageField



class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


def get_topic(topic_id):
	topic = get_object_or_404(Topic, id=topic_id)
	return topic


def get_course(course_id):
	course = get_object_or_404(Course, id=course_id)
	return course

def get_subtopic(subtopic_id):
	subtopic = get_object_or_404(SubTopic, id=subtopic_id)
	return subtopic

def get_studynote(studynote_id):
	study_note = get_object_or_404(StudyNote, id=studynote_id)
	return study_note


class ItReferenceSourceCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = ReferrenceSource
		fields = [
				'id',
				'title',
				'author',
				'publisher',
				'date_published',
				'note_id'

			]
		read_only_fields = ('id',)

	def create(self, validated_data):
		note_id = validated_data['note_id']
		reference = Text(
					title= validated_data['title'],
					author= validated_data['author'],
					publisher= validated_data['author'],
					date_published = validated_data['date_published'],
					note_id= validated_data['note_id'],
				)
		reference.save()
		current_note = get_studynote(note_id)
		current_note.references.add(reference)
		return reference


class ItReferenceSourceListDetailSerializer(serializers.ModelSerializer):
	publisher = StringSerializer()

	class Meta:
		model = ReferrenceSource
		fields = [
				'id',
				'title',
				'author',
				'publisher',
				'date_published',

			]



class ItCreateUpdateAuthorSerializer(serializers.ModelSerializer):

	class Meta:
		model = Author
		fields = [
				'id',
				'name'
			]


class ItListAuthorSerializer(serializers.ModelSerializer):

	class Meta:
		model = Author
		fields = [
				'id',
				'author_number'
				'name'
			]



class ItPublisherCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Publisher
		fields = [
			'name',
			'city'
		]


class ItPublisherListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Publisher
		fields = [
			'id',
			'number',
			'name',
			'city',

		]






class ItPublisherCityCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = PublisherCity
		fields = [
			'id',
			'name'
		]


class ItPublisherCityListSerializer(serializers.ModelSerializer):

	class Meta:
		model = PublisherCity
		fields = [
			'id',
			'name',
			'number',
		]





class ItTextCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Text
		fields = [
				'id',
				'title',
				'content',
				'note_id',
			]
		read_only_fields = ('id',)

	def create(self, validated_data):
		note_id = validated_data['note_id']
		text = Text(
					title= validated_data['title'],
					content = validated_data['content'],
					note_id= validated_data['note_id'],
				)
		text.save()
		current_note = get_studynote(note_id)
		current_note.notes.add(text)
		return text



class ItTextListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Text
		fields = [
				'id',
				'title',
				'content',
				'created',
				'updated'
			]



# class ItTextListDetailSerializer(serializers.ModelSerializer):
#
# 	class Meta:
# 		model = File
# 		fields = [
# 				'id',
# 				'title',
# 				'file',
# 			]



class ItFileListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = File
		fields = [
				'id',
				'title',
				'file',
				'created',
				'updated'
			]


class ItFileCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = File
		fields = [
				'id',
				'title',
				'file',
			]
		read_only_fields = ('id',)

	def create(self, validated_data):
		note_id = validated_data['note_id']
		file = File(
					title= validated_data['title'],
					file= validated_data['file'],
					note_id= validated_data['note_id'],
				)
		file.save()
		current_note = get_studynote(note_id)
		current_note.files.add(file)
		return file



class ItImageCreateUpdateSerializer(serializers.ModelSerializer):
	file = Base64ImageField(max_length=None, use_url=True,)

	class Meta:
		model = Image
		fields = [
				'id',
				'title',
				'file',
				'note_id'
			]
		read_only_fields = ('id',)

	def create(self, validated_data):
		note_id = validated_data['note_id']
		image = Image(
					title= validated_data['title'],
					file= validated_data['file'],
					note_id= validated_data['note_id'],
				)
		image.save()
		current_note = get_studynote(note_id)
		current_note.images.add(image)
		return image



class ItImageListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Image
		fields = [
				'id',
				'title',
				'file',
				'created',
				'updated'
			]



class ItVideoCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Video
		fields = [
				'id',
				'title',
				'url',
				'note_id',
			]
		read_only_fields = ('id',)

	def create(self, validated_data):
		note_id = validated_data['note_id']
		video = Video(
					title= validated_data['title'],
					url= validated_data['url'],
					note_id= validated_data['note_id'],
				)
		video.save()
		current_note = get_studynote(note_id)
		current_note.videos.add(video)
		return video




class ItVideoListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Video
		fields = [
				'id',
				'title',
				'url',
				'created',
				'updated'
			]




class ItStudyNoteCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudyNote
		fields = [
				'id',
				'title',
				'status',
				'approval_status',
				'note',
				'subtopic_id',
			]
		read_only_fields = ('id',)

	def create(self, validated_data):
		subtopic_id = validated_data['subtopic_id']
		studynote = StudyNote(
					title= validated_data['title'],
					status= validated_data['status'],
					approval_status= validated_data['approval_status'],
					note= validated_data['note'],
					subtopic_id = validated_data['subtopic_id'],
				)
		studynote.save()
		current_topic = get_subtopic(subtopic_id)
		current_topic.notes.add(studynote)
		return studynote


class ItStudyNoteListSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudyNote
		fields = [
			'id',
			'title',
			'status',
			'approval_status',

			]


class ItStudyNoteDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudyNote
		fields = [
			'id',
			'title',
			'status',
			'approval_status',
		]






class ItTopicObjectiveCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicObjective
		fields = [
			'id',
			'name',
			'description',
			'topic_id'
		]
		read_only_fields = ('id',)

	def create(self, validated_data):
		topic_id = validated_data['topic_id']
		objective = TopicObjective(
					name= validated_data['name'],
					description= validated_data['description'],
					topic_id = validated_data['topic_id'],
				)
		objective.save()
		current_topic = get_topic(topic_id)
		current_topic.objectives.add(objective)
		return objective


class ItTopicObjectiveListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicObjective
		fields = [
			'id',
			'name',
			'description',
		]



class ItTopicGuidelineCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicGuideLine
		fields = [
			'id',
			'name',
			'description',
			'topic_id',
		]
		read_only_fields = ('id',)

	def create(self, validated_data):
		topic_id = validated_data['topic_id']
		guideline = TopicGuideLine(
					name= validated_data['name'],
					description= validated_data['description'],
					topic_id = validated_data['topic_id'],
				)
		guideline.save()
		current_topic = get_topic(topic_id)
		current_topic.guidelines.add(guideline)
		return guideline


class ItTopicGuidelineListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = TopicGuideLine
		fields = [
			'id',
			'name',
			'description',

		]



class ItReviewListDetailSerializer(serializers.ModelSerializer):
	course =StringSerializer()

	class Meta:
		model = Review
		fields = [
			'id',
			'course',
			'pub_date',
			'comment',
			'rating',

		]


class ItReviewCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Review
		fields = [
			'id',
			'course',
			'pub_date',
			'comment',
			'rating',

		]



class ItSubTopicCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = SubTopic
		fields =[
			'id',
			'title',
			'topic_id',
		]
		read_only_fields = ('id',)

	def create(self, validated_data):
		topic_id = validated_data['topic_id']
		subtopic = SubTopic(
					title= validated_data['title'],
					topic_id = validated_data['topic_id'],
				)
		subtopic.save()
		current_topic = get_topic(topic_id)
		current_topic.subtopics.add(subtopic)
		return subtopic


class ItSubTopicListSerializer(serializers.ModelSerializer):
	topic = StringSerializer()

	class Meta:
		model = SubTopic
		fields =[
			'id',
			'title',
			'topic',
		]


class ItSubTopicDetailSerializer(serializers.ModelSerializer):
	topic = StringSerializer()
	notes = ItStudyNoteDetailSerializer(many=True)

	class Meta:
		model = SubTopic
		fields =[
			'id',
			'title',
			'topic',
			'notes',
		]




class ItTopicCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:
		model = Topic
		fields = [
			'id',
			'title',
			'content_overview',
			'assessment_overview',
			'course_id',
		]
		read_only_fields = ('id',)



	def create(self, validated_data):
		course_id = validated_data['course_id']
		topic = Topic(
					title= validated_data['title'],
					content_overview = validated_data['content_overview'],
					assessment_overview = validated_data['assessment_overview'],
					course_id = validated_data['course_id'],
				)
		topic.save()
		current_course = get_course(course_id)
		current_course.topics.add(topic)
		return topic

class ItTopicListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Topic
		fields = [
			'id',
			'title',
			'content_overview',
			'assessment_overview',

		]





class ItTopicDetailSerializer(serializers.ModelSerializer):



	class Meta:
		model = Topic
		fields = [
			'id',
			'title',
			'content_overview',
			'assessment_overview',

		]


class ItCourseCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = [
			'id',
			'image',
			'full_name',
			'short_name',
			'status',
			'start_date',
			'end_date',
			'description',


		]



class ItCourseListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = [
			'id',
			'full_name',
			'short_name',
			'status',
			'start_date',
			'end_date',

		]



class ItStudentSerializer(serializers.ModelSerializer):
	school = StringSerializer()

	class Meta:
		model = Student
		fields = [
			'id',
			'school',
			# 'klass',
			'first_name',
			'last_name'
		]


class ItOwnersSerializer(serializers.ModelSerializer):
	type = serializers.SerializerMethodField()
	status = serializers.SerializerMethodField()

	class Meta:
		model = Institution
		fields = [
			'id',
			'name',
			'type',
			'status'
		]


	def get_status(self, obj):
		return obj.get_status_display()


	def get_type(self, obj):
		return obj.get_type_display()



class ItCourseDetailSerializer(serializers.ModelSerializer):
	status = serializers.SerializerMethodField()
	stream = serializers.SerializerMethodField()

	class Meta:
		model = Course
		fields = [
			'id',
			'full_name',
			'short_name',
			'stream',
			'status',
			'overview',
			'start_date',
			'end_date',
			'course_number',
			'description',

		]


	def get_stream(self, obj):
		return obj.get_stream_display()

	def get_status(self, obj):
		return obj.get_status_display()



class StudentCourseEnrollmentCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentCourseEnrollment
		fields = [
			'id',
			'status',
			'student',
			'course',
		]

	def create(self, validated_data):
		# course=  get_course(course_id=validated_data['course'])
		enrollmment = StudentCourseEnrollment(
								course=validated_data['course'],
								status = validated_data['status'],
								student = validated_data['student']
							)
		enrollmment.save()
		return enrollmment


class StudentCourseEnrollmentListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentCourseEnrollment
		fields = [
			'id',
			'status',
			'student',
			'course',
			'date_enrolled',
		]
