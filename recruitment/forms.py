from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(label='Username',widget=forms.TextInput(attrs={'placeholder':'Enter your username'}))
    password = forms.CharField(label ='Password', widget=forms.PasswordInput(attrs={'placeholder':'Enter a Password'}))