from django.db import models


class Ticket(models.Model):
    
    TICKET_STATUS = [
        ('open', 'Open'),
        ('reopened', 'Reopened'),
        ('closed', 'Closed'),
    ]
    

    TICKET_PRIORITY = [
        ('critical', 'Critical'),
        ('high', 'High'),
        ('normal', 'Normal'),
        ('low', 'Low'),
        ('very_low', 'Very Low'),
    ] 

    CATEGORY_CHOICES = [
        ('enquiry', 'ENQUIRY'),
        ('complaint', 'COMPLAINT'),
        ('refund', 'REFUND'),
        ('application', 'APPLICATION'),
        ('payment', 'PAYMENT'),
        ('order', 'ORDER'),
    ]

    subject = models.CharField(
                        max_length=100,
                    )
    category = models.CharField(
                        max_length=50,
                        choices = CATEGORY_CHOICES,
                        default='enquiry'
                    )
    created_by = models.ForeignKey(
                            'people.User',
                            null=False,
                            related_name='tickects',
                            on_delete=models.CASCADE
                        )
    assigned_by = models.ForeignKey(
                            'people.User',
                            null=True,
                            related_name='assigned_tickects',
                            on_delete=models.CASCADE,
                        )
    assigned_to = models.ForeignKey(
                            'people.User',
                            null=True,
                            related_name='handled_tickects',
                            on_delete=models.CASCADE
                        )

    status = models.CharField(
        choices=TICKET_STATUS,
        default='open',
        max_length=200
    )

    priority = models.CharField(
        choices=TICKET_PRIORITY,
        default='normal',
        max_length=200
    )
    created = models.DateTimeField(auto_now_add=True)
    last_active = models.DateTimeField(auto_now=True)
    date_closed = models.DateTimeField(blank=True, null=True)
    comments = models.ManyToManyField(
                                'Comment',
                                blank=True,
                            )


    def __str__(self):
        return self.subject


class Comment(models.Model):
    
    user = models.ForeignKey(
        'people.User',
        related_name='comments',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    comment = models.TextField()
    ticket_id = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)



    def __str__(self):
        return self.comment
