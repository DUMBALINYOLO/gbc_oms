from django.db import models

class Post(models.Model):
	id = models.AutoField(primary_key=True)
	title = models.CharField(max_length=234)
	author = models.CharField(max_length=234)
	image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)
	content = models.TextField()
	published_date = models.DateField()


	def __str__(self):
		return self.title
