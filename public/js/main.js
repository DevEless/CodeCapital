const patients = [{
            nom: "Marcus",
            maladie: "mal indenté",
            argent: 100,
            poche: [],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}€`);
            }
        },
        {
            nom: "Optimus",
            maladie: "unsave",
            argent: 200,
            poche: [],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}€`);
            },
        },
        {
            nom: "Sangoku",
            maladie: "404",
            argent: 80,
            poche: ["senzu"],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}€`);
            }
        },
        {
            nom: "DarthVader",
            maladie: "azmatique",
            argent: 110,
            poche: ["lightsaber"],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}`)},
            }, {
                    nom: "Smicolon",
                    maladie: "SyntaxError",
                    argent: 60,
                    poche: [],
                    etatSante: "malade",
                    goTo: function (lieu) {
                        lieu.patients.push(this);
                        console.log(`${this.nom} va à ${lieu.nom}`);
                    },
                    takeCare: function (traitement) {
                        this.poche.push(traitement);
                        console.log(`${this.nom} prend ${traitement}`);
                    },
                    paye: function (prix) {
                        this.argent -= prix;
                        console.log(`${this.nom} paie ${prix}`);
                    }
                }
            ];

            const salleDAttente = {
                nom: "Salle d'attente",
                patients: []
            };

            const cabinet = {
                nom: "Cabinet du médecin",
                patients: [],
                patientIn: function (patient) {
                    console.log(`${patient.nom} entre dans le cabinet like a cat`);
                    //ne voulant pas offenser un quelconque "genre" le mot original du meme a été remplacé par "cat" merci de votre compréhension
                    patient.etatSante = "traitement";
                },
                diagnostique: function (patient) {
                    console.log(`Le médecin diagnostique ${patient.nom} qui souffre de ${patient.maladie}`);
                    patient.traitement = diagnostic[patient.maladie];
                },
                patientOut: function (patient) {
                    console.log(`${patient.nom} sort du cabinet like a gang$ta`);
                    this.patients.splice(this.patients.indexOf(patient), 1);
                },
                chat: {
                    race: "sphynx",
                    miauler: function () {
                        console.log("Miaw miaw whitos");
                        //ne voulant pas offenser une quelconque communauté le mot original du meme a été remplacé par "whitos" merci de votre compréhension
                        setInterval(this.miauler, 2000);
                    },
                },
                Dog: {
                    race: "Doggo",
                    randomEvent: function () {
                        console.log("wat the dog doing ?");
                        setInterval(this.randomEvent, 2000);
                    },
                },
            };