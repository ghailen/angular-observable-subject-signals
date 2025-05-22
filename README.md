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


Maintenant on va faire la meme chose mais avec signal:
🧱 1. shared-signal.service.ts
![image](https://github.com/user-attachments/assets/e112a404-b72f-46e5-82e1-6b7d7a6bac92)

🧩 2. sender-signal.component.ts – envoi d’un message
![image](https://github.com/user-attachments/assets/f12e78c1-a938-4479-a427-8ccc84211780)
 3. receiver-signal.component.ts – affichage des messages
 
 ![image](https://github.com/user-attachments/assets/54b15f7a-4c20-49d1-86b8-65f8d2c55faa)
 ![image](https://github.com/user-attachments/assets/b8f9ed83-2cc5-4a83-afab-c69c945918b7)

![image](https://github.com/user-attachments/assets/62f73155-2f23-40ce-b598-b452a9d05d5c)
![image](https://github.com/user-attachments/assets/14ee040d-b431-4eb7-ac8d-b4837671ee46)


=======================================================
======================================================

Un signal en Angular (introduit dans Angular 16) est une nouvelle manière de gérer l’état réactif, plus simple, plus performante et synchronisée avec le DOM, sans avoir besoin d’Observable ou subscribe().
🎯 Définition courte :

    Un signal est une valeur réactive que tu peux lire, modifier, et surveiller automatiquement.


![image](https://github.com/user-attachments/assets/418dc13d-24af-4f97-b97d-ffcab8c54d4d)
=> resultat:
![image](https://github.com/user-attachments/assets/25b3c097-7d2a-405c-8af0-926340866292)

![image](https://github.com/user-attachments/assets/919332d1-8976-41cc-96e4-e1b72ed86edb)

🧠 Concepts liés :
1. signal(value) :

Crée une valeur réactive.
=>![image](https://github.com/user-attachments/assets/16ddb13c-8ea2-42d9-8904-73cb4bcee9cb)
![image](https://github.com/user-attachments/assets/c3d18a35-a8f4-4c82-945c-ff95fefda312)

2. computed(() => ...) :

Crée une valeur dérivée automatiquement mise à jour.
![image](https://github.com/user-attachments/assets/9aefb6bf-0c83-4dfa-897a-ed6d21efb75b)

=>
![image](https://github.com/user-attachments/assets/37e08e14-edd4-4191-9f18-61d6d099f0ca)

3. effect(() => ...) :

Exécute une fonction quand un signal change (comme un useEffect en React).

![image](https://github.com/user-attachments/assets/67976777-55b2-4bd3-a869-4a016e1f8da1)

![image](https://github.com/user-attachments/assets/a116d9d3-1388-4215-95a0-c20314c1d41b)

![image](https://github.com/user-attachments/assets/03fd0cff-72fe-4043-a6ef-2466759ef9fd)


========================================================
========================================================**comment utilisé signal pour consomer un api** ==============================
Voici un exemple Angular 18 complet qui montre comment consommer une API avec HttpClient et signals grâce à toSignal() ✅
![image](https://github.com/user-attachments/assets/40f8d2df-0def-4e83-8ea8-b9cc7040223c)

🧱 1. Service – user.service.ts
![image](https://github.com/user-attachments/assets/20b1128d-5713-43d8-bf2d-d9958c937911)

🧩 2. Composant – user.component.ts
![image](https://github.com/user-attachments/assets/a634a238-b048-4ce0-8b1f-f7e1936d269d)

🧩 3. add selector information in AppComponent – pour afficher le composant 

![image](https://github.com/user-attachments/assets/a1e6e883-2f45-4823-96c5-7cefe1d9def6)

=> resultat:
![image](https://github.com/user-attachments/assets/76820091-767f-4695-bfa6-d31bf99c2b6b)

![image](https://github.com/user-attachments/assets/0d2a19f0-45e5-4efd-abf8-b1075e96cb2d)
