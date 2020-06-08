db = connect('127.0.0.1:27017/content-center');
db.dropDatabase();
db = connect('127.0.0.1:27017/content-center');
db.createCollection('users');
db.users.createIndex({ 'id': 1 }, { unique: true });
db.createCollection('sequences');
db.sequences.insertOne({
    name: 'user_id',
    value: 1
});
db.createCollection('codemail');
db.codemail.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 1500 });
db.createCollection('courses');
db.courses.createIndex({ 'id': 1 }, { unique: true });
db.createCollection('sequencescourses');
db.sequencescourses.insertOne({
    name: 'course_id',
    value: 1
});
db.createCollection('cupons');
db.cupons.insertOne({
    cupom: 'CCDESCONTO10',
    porcent: 0.1
});
db.cupons.insertOne({
    cupom: 'CCDESCONTO20',
    porcent: 0.2
});
db.cupons.insertOne({
    cupom: 'CCDESCONTO30',
    porcent: 0.3
});
db.cupons.insertOne({
    cupom: 'CCDESCONTO50',
    porcent: 0.5
});
db.cupons.insertOne({
    cupom: 'CCDESCONTO75',
    porcent: 0.75
});
db.courses.insert({ "id": 1,
  "name": "Inglês para iniciantes",
  "type": "idiomas",
  "price": 23,
  "description": "Para quem não sabe nada de inglês e também não sabe onde começar esse curso é ideal",
  "hours": 56,
  "image": "curso_ingles.jpg",
  "classes": [{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Maria Silva e Carlos Andrade",
  "chat": []
})

db.courses.insert({ "id": 2,
  "name": "Crioulo Haitiano básico",
  "type": "idiomas",
  "price": 64,
  "description": "Que tal aprender um idioma diferente do comum ? Com esse curso você aprende um idioma que é a 90% do francês mas com suas caracteristicas",
  "hours": 124,
  "image": "haiti.png",
  "classes": [{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Beatriz Souza",
  "chat": []
})

db.courses.insert({ "id": 3,
  "name": "Francês Nível 1, 2 e 3",
  "type": "idiomas",
  "price": 45,
  "description": "Aqui você aprende francês desde o básico ao avançado, não deixamos nada faltar!",
  "hours": 112,
  "image": "frances.jpg",
  "classes": [{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Pietra Martins",
  "chat": []
})

db.courses.insert({ "id": 4,
  "name": "Japonês como nunca",
  "type": "idiomas",
  "price": 99,
  "description": "Acha que aprender japonês é muito difícil, aqui você aprende japonês num piscar de olhos",
  "hours": 86,
  "image": "japones.jpg",
  "classes":[{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Komoko San",
  "chat": []
})

db.courses.insert({ "id": 5,
  "name": "Inglês Profissional",
  "type": "idiomas",
  "price": 142,
  "description": "Precisa de inglês para o trabalho ? Entrevista ? Apresentações ? Falar com cliente ? Temos tudo isso",
  "hours": 73,
  "image": "curso_ingles3.jpg",
  "classes": [{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Julia Gardi",
  "chat": []
})

db.courses.insert({ "id": 6,
  "name": "Mandarim",
  "type": "idiomas",
  "price": 89,
  "description": "Um idioma milenar, com uma grafia diferente mas com certeza não impossível de aprender. Quer ver ?",
  "hours": 100,
  "image": "mandarim.jpg",
  "classes":[{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Ju Xiao",
  "chat": []
})

db.courses.insert({ "id": 7,
  "name": "Inglês Avançado",
  "type": "idiomas",
  "price": 78,
  "description": "Esta precisando aprimorar seu inglês e se tornar fluente ? Então vem com a gente.",
  "hours": 94,
  "image": "curso_ingles2.jpg",
  "classes": [{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "André Lima",
  "chat": []
})


db.courses.insert({ "id": 8,
  "name": "Inglês para crianças",
  "type": "idiomas",
  "price": 50,
  "description": "Com vídeo aulas instrutivas em forma de desenho, seu filho vai aprender brincando.",
  "hours": 35,
  "image": "curso_ingles4.jpg",
  "classes": [{ "id": 1, "name": "Aprendendo palavras básicas"}, { "id": 2, "name": "Aprendendo os verbos"}, {"id": 3, "name": "Treinando a pronuncia"}],
  "teacher": "Jennifer Smith",
  "chat": []
})
