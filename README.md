A private college management system written in django , django rest framework, react js, primereact and material ui


configure your database first
either set postgresql or sqlite 
then .....


pip install -r requirements.txt

python manage.py shell_plus -notebook

a = Princal.objects.create_principal(
     username = '',
     email = '',
     password=''
)

a.active = True,
a.save()


exit jupyter server

python manage.py runserver

then the buld frontend shall run 

if you want to change react then 

 cd frontend
  npm i
  npm start

