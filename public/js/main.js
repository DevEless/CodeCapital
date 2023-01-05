const patients = [{
            nom: "Marcus",
            maladie: "mal indenté",
            argent: 100,
            poche: [],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}.`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}.`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}€.`);
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
                console.log(`${this.nom} va à ${lieu.nom}.`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}.`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}€.`);
            },
        },
        {
            nom: "Sangoku",
            maladie: "404",
            argent: 80,
            poche: [],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}.`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}.`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}€.`);
            }
        },
        {
            nom: "DarthVader",
            maladie: "azmatique",
            argent: 110,
            poche: [],
            etatSante: "malade",
            goTo: function (lieu) {
                lieu.patients.push(this);
                console.log(`${this.nom} va à ${lieu.nom}.`);
            },
            takeCare: function (traitement) {
                this.poche.push(traitement);
                console.log(`${this.nom} prend ${traitement}.`);
            },
            paye: function (prix) {
                this.argent -= prix;
                console.log(`${this.nom} paie ${prix}.`)},
            }, {
                    nom: "Smicolon",
                    maladie: "SyntaxError",
                    argent: 60,
                    poche: [],
                    etatSante: "malade",
                    goTo: function (lieu) {
                        lieu.patients.push(this);
                        console.log(`${this.nom} va à ${lieu.nom}.`);
                    },
                    takeCare: function (traitement) {
                        this.poche.push(traitement);
                        console.log(`${this.nom} prend ${traitement}.`);
                    },
                    paye: function (prix) {
                        this.argent -= prix;
                        console.log(`${this.nom} paie ${prix}.`);
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
                diagnostique: function (patient) {
                    console.log(`Le médecin diagnostique ${patient.nom} qui souffre de ${patient.maladie}.`);
                    patient.traitement = diagnostic[patient.maladie];
                },
                patientIn: function (patient) {
                    console.log(`${patient.nom} entre dans le cabinet.`);
                    patient.etatSante = "traitement";
                },
                patientOut: function (patient) {
                    console.log(`${patient.nom} sort du cabinet.`);
                    this.patients.splice(this.patients.indexOf(patient), 1);
                },
                chat: {
                    race: "sphynx",
                    miauler: function () {
                        console.log("Miaou!");
                        setInterval(this.miauler, 2000);
                    },
                },
            };