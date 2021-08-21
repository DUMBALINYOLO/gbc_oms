from django.db import models

class ActivityReadLog(models.Model):
    user = models.ForeignKey(
                    'people.User', 
                    on_delete=models.CASCADE,
                    blank=True
                )
    model = models.CharField(max_length=20)
    headers = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    activity = models.TextField(blank=True, null=True)


    def __str__(self):
        return f'{self.user.username} Log'
    
    
