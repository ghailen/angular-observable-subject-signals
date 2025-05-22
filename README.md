# angular-observable-subject-signals
Observable example:

![image](https://github.com/user-attachments/assets/637afd30-e362-486d-a252-23a72aea925a)

![image](https://github.com/user-attachments/assets/b71f4dc5-861b-47ca-9389-768be7f66433)
=>
![image](https://github.com/user-attachments/assets/ff89c38a-7280-49e0-a976-9ad5c2d9377a)



Without multicasting
![image](https://github.com/user-attachments/assets/4721e0d6-4daf-48ee-949a-54613354540e)
![image](https://github.com/user-attachments/assets/19ed24a9-b2e9-4d89-a15e-54a823803dad)
=>
![image](https://github.com/user-attachments/assets/36d75dad-89ee-4d7b-b5e3-304cff908a45)
➡ Chaque abonné a sa propre exécution indépendante.




![image](https://github.com/user-attachments/assets/95261aeb-eae4-42cb-baf6-4f0c28d6ddb3)

Subject:

![image](https://github.com/user-attachments/assets/130e1ba6-baa6-4440-bbf1-bd5aaea61bf5)

![image](https://github.com/user-attachments/assets/3c9c5dac-7424-4289-afc8-f9b878af1ba9)

here all the subscriber will receive the message
![image](https://github.com/user-attachments/assets/b0f4f0d4-b414-4fac-af2a-19d21fdc6fe3)
➡ Un seul next(), tous les abonnés reçoivent la même valeur.
![image](https://github.com/user-attachments/assets/b6794881-c4b9-40de-921b-0a6cd6b022bc)

![image](https://github.com/user-attachments/assets/2a9625d5-2c4e-4392-9bbc-74433f66a86a)

![image](https://github.com/user-attachments/assets/9ce199e8-7e98-4218-94c6-5662e005c9c0)

![image](https://github.com/user-attachments/assets/f070f1d8-c5f7-4dad-8d79-da7ea11e4610)

![image](https://github.com/user-attachments/assets/5cef76fd-798b-4ffc-abbc-1eea5aebc227)

![image](https://github.com/user-attachments/assets/861e8532-d60c-46b3-8a50-29df6b765747)

![image](https://github.com/user-attachments/assets/78e98f9b-e3db-4398-8600-55f174d41b0c)

=>
![image](https://github.com/user-attachments/assets/92b79a97-f6d0-4400-bcd7-130e791ff481)

=>
![image](https://github.com/user-attachments/assets/61fc93a2-1a6f-4bee-8748-34be87837d01)

![image](https://github.com/user-attachments/assets/9614d15e-8f8c-4841-ab0f-e204bfa6c76b)

![image](https://github.com/user-attachments/assets/e7db0819-8969-49d2-a031-4b94a2d5c6ef)

example more clear for ReplaySubject:
![image](https://github.com/user-attachments/assets/5f201151-cf21-4a9e-9992-ff94ab03f36b)

=>
![image](https://github.com/user-attachments/assets/28780972-c180-43ce-ba12-e6e45b3f4080)

➡ ReplaySubject(2) a oublié 'A' et garde les 2 dernières valeurs ['B', 'C'].

Maintenant, après l'abonnement :
replay$.next('D');
comme ça :
![image](https://github.com/user-attachments/assets/554d9788-2e9c-4366-9716-4f07eba5765f)

![image](https://github.com/user-attachments/assets/2dbfee2d-3083-4baf-89e4-b6561064582f)

➡ Ce nouveau message est reçu en direct, comme avec un Subject.
