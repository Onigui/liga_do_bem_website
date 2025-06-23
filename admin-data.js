// Sistema de dados administrativos da Liga do Bem
class AdminDataManager {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        // Inicializar dados se não existirem
        if (!localStorage.getItem('ligaDoBem_pets')) {
            this.resetToDefaultData();
        }
    }

    resetToDefaultData() {
        const defaultPets = [
            {
                id: 1,
                name: "Luna",
                type: "Gata",
                age: "2 anos",
                description: "Luna é uma gatinha carinhosa que adora brincar e receber carinho. Foi resgatada das ruas e está procurando uma família amorosa.",
                tags: ["Carinhosa", "Brincalhona", "Castrada"],
                emoji: "🐱",
                photo: null, // Base64 encoded photo
                status: "Disponível",
                dateAdded: new Date().toISOString(),
                medicalHistory: [],
                adoptionProcess: null,
                sponsor: null
            },
            {
                id: 2,
                name: "Thor",
                type: "Cão",
                age: "3 anos",
                description: "Thor é um cão muito leal e protetor. Ama crianças e é perfeito para famílias ativas. Foi abandonado, mas não perdeu a fé nos humanos.",
                tags: ["Leal", "Protetor", "Ama crianças"],
                emoji: "🐕",
                photo: null,
                status: "Disponível",
                dateAdded: new Date().toISOString(),
                medicalHistory: [],
                adoptionProcess: null,
                sponsor: null
            },
            {
                id: 3,
                name: "Mimi",
                type: "Gata",
                age: "1 ano",
                description: "Mimi é uma gatinha jovem e cheia de energia. Adora explorar e é muito curiosa. Perfeita para quem busca um companheiro aventureiro.",
                tags: ["Energética", "Curiosa", "Jovem"],
                emoji: "🐈",
                photo: null,
                status: "Disponível",
                dateAdded: new Date().toISOString(),
                medicalHistory: [],
                adoptionProcess: null,
                sponsor: null
            },
            {
                id: 4,
                name: "Buddy",
                type: "Cão",
                age: "5 anos",
                description: "Buddy é um cão maduro e calmo, perfeito para pessoas que buscam um companheiro tranquilo. Adora passeios e é muito obediente.",
                tags: ["Calmo", "Obediente", "Maduro"],
                emoji: "🦮",
                photo: null,
                status: "Disponível",
                dateAdded: new Date().toISOString(),
                medicalHistory: [],
                adoptionProcess: null,
                sponsor: null
            },
            {
                id: 5,
                name: "Princesa",
                type: "Gata",
                age: "4 anos",
                description: "Princesa faz jus ao nome! É elegante e carinhosa, adora ser mimada. Está procurando uma família que a trate como realeza.",
                tags: ["Elegante", "Carinhosa", "Mimada"],
                emoji: "👑🐱",
                photo: null,
                status: "Disponível",
                dateAdded: new Date().toISOString(),
                medicalHistory: [],
                adoptionProcess: null,
                sponsor: null
            },
            {
                id: 6,
                name: "Max",
                type: "Cão",
                age: "2 anos",
                description: "Max é um cão cheio de vida e energia! Adora correr, brincar com bola e fazer novos amigos. Ideal para famílias ativas.",
                tags: ["Energético", "Brincalhão", "Sociável"],
                emoji: "🐶",
                photo: null,
                status: "Disponível",
                dateAdded: new Date().toISOString(),
                medicalHistory: [],
                adoptionProcess: null,
                sponsor: null
            }
        ];

        const defaultStats = {
            animalsRescued: 150,
            adoptionsCompleted: 89,
            volunteersActive: 25,
            partnersCount: 12
        };

        const defaultContent = {
            heroTitle: "Salvando Vidas, Criando Famílias",
            heroSubtitle: "Cada animal merece uma segunda chance. Junte-se a nós nessa missão de amor e esperança.",
            aboutText: "A Liga do Bem é uma organização dedicada ao resgate e cuidado de animais abandonados. Trabalhamos incansavelmente para encontrar lares amorosos para cada animal que chega até nós.",
            contactInfo: {
                phone: "(11) 99999-9999",
                email: "contato@ligadobem.org",
                address: "Rua dos Animais, 123 - São Paulo, SP"
            }
        };

        // Dados padrão para novas funcionalidades
        const defaultVolunteers = [];
        const defaultVisits = [];
        const defaultAdoptions = [];
        const defaultSponsors = [];
        const defaultEvents = [];
        const defaultDonations = [];
        const defaultNotifications = [];

        localStorage.setItem('ligaDoBem_pets', JSON.stringify(defaultPets));
        localStorage.setItem('ligaDoBem_stats', JSON.stringify(defaultStats));
        localStorage.setItem('ligaDoBem_content', JSON.stringify(defaultContent));
        localStorage.setItem('ligaDoBem_messages', JSON.stringify([]));
        localStorage.setItem('ligaDoBem_volunteers', JSON.stringify(defaultVolunteers));
        localStorage.setItem('ligaDoBem_visits', JSON.stringify(defaultVisits));
        localStorage.setItem('ligaDoBem_adoptions', JSON.stringify(defaultAdoptions));
        localStorage.setItem('ligaDoBem_sponsors', JSON.stringify(defaultSponsors));
        localStorage.setItem('ligaDoBem_events', JSON.stringify(defaultEvents));
        localStorage.setItem('ligaDoBem_donations', JSON.stringify(defaultDonations));
        localStorage.setItem('ligaDoBem_notifications', JSON.stringify(defaultNotifications));
    }

    // Gerenciamento de Pets
    getPets() {
        return JSON.parse(localStorage.getItem('ligaDoBem_pets') || '[]');
    }

    addPet(pet) {
        const pets = this.getPets();
        const newId = Math.max(...pets.map(p => p.id), 0) + 1;
        const newPet = {
            ...pet,
            id: newId,
            dateAdded: new Date().toISOString(),
            status: pet.status || 'Disponível'
        };
        pets.push(newPet);
        localStorage.setItem('ligaDoBem_pets', JSON.stringify(pets));
        return newPet;
    }

    updatePet(id, updatedPet) {
        const pets = this.getPets();
        const index = pets.findIndex(p => p.id === id);
        if (index !== -1) {
            pets[index] = { ...pets[index], ...updatedPet };
            localStorage.setItem('ligaDoBem_pets', JSON.stringify(pets));
            return pets[index];
        }
        return null;
    }

    deletePet(id) {
        const pets = this.getPets();
        const filteredPets = pets.filter(p => p.id !== id);
        localStorage.setItem('ligaDoBem_pets', JSON.stringify(filteredPets));
        return true;
    }

    // Gerenciamento de Estatísticas
    getStats() {
        return JSON.parse(localStorage.getItem('ligaDoBem_stats') || '{}');
    }

    updateStats(stats) {
        localStorage.setItem('ligaDoBem_stats', JSON.stringify(stats));
        return stats;
    }

    // Gerenciamento de Conteúdo
    getContent() {
        return JSON.parse(localStorage.getItem('ligaDoBem_content') || '{}');
    }

    updateContent(content) {
        const currentContent = this.getContent();
        const updatedContent = { ...currentContent, ...content };
        localStorage.setItem('ligaDoBem_content', JSON.stringify(updatedContent));
        return updatedContent;
    }

    // Gerenciamento de Mensagens
    getMessages() {
        return JSON.parse(localStorage.getItem('ligaDoBem_messages') || '[]');
    }

    addMessage(message) {
        const messages = this.getMessages();
        const newMessage = {
            ...message,
            id: Date.now(),
            date: new Date().toISOString(),
            read: false
        };
        messages.unshift(newMessage);
        localStorage.setItem('ligaDoBem_messages', JSON.stringify(messages));
        return newMessage;
    }

    markMessageAsRead(id) {
        const messages = this.getMessages();
        const message = messages.find(m => m.id === id);
        if (message) {
            message.read = true;
            localStorage.setItem('ligaDoBem_messages', JSON.stringify(messages));
        }
        return message;
    }

    deleteMessage(id) {
        const messages = this.getMessages();
        const filteredMessages = messages.filter(m => m.id !== id);
        localStorage.setItem('ligaDoBem_messages', JSON.stringify(filteredMessages));
        return true;
    }

    // Gerenciamento de Voluntários
    getVolunteers() {
        return JSON.parse(localStorage.getItem('ligaDoBem_volunteers') || '[]');
    }

    addVolunteer(volunteer) {
        const volunteers = this.getVolunteers();
        const newId = Math.max(...volunteers.map(v => v.id), 0) + 1;
        const newVolunteer = {
            ...volunteer,
            id: newId,
            dateRegistered: new Date().toISOString(),
            status: 'Ativo',
            points: 0,
            activities: []
        };
        volunteers.push(newVolunteer);
        localStorage.setItem('ligaDoBem_volunteers', JSON.stringify(volunteers));
        return newVolunteer;
    }

    updateVolunteer(id, updatedVolunteer) {
        const volunteers = this.getVolunteers();
        const index = volunteers.findIndex(v => v.id === id);
        if (index !== -1) {
            volunteers[index] = { ...volunteers[index], ...updatedVolunteer };
            localStorage.setItem('ligaDoBem_volunteers', JSON.stringify(volunteers));
            return volunteers[index];
        }
        return null;
    }

    deleteVolunteer(id) {
        const volunteers = this.getVolunteers();
        const filteredVolunteers = volunteers.filter(v => v.id !== id);
        localStorage.setItem('ligaDoBem_volunteers', JSON.stringify(filteredVolunteers));
        return true;
    }

    // Gerenciamento de Visitas
    getVisits() {
        return JSON.parse(localStorage.getItem('ligaDoBem_visits') || '[]');
    }

    addVisit(visit) {
        const visits = this.getVisits();
        const newId = Math.max(...visits.map(v => v.id), 0) + 1;
        const newVisit = {
            ...visit,
            id: newId,
            dateScheduled: visit.dateScheduled,
            status: 'Agendada',
            dateCreated: new Date().toISOString()
        };
        visits.push(newVisit);
        localStorage.setItem('ligaDoBem_visits', JSON.stringify(visits));
        return newVisit;
    }

    updateVisit(id, updatedVisit) {
        const visits = this.getVisits();
        const index = visits.findIndex(v => v.id === id);
        if (index !== -1) {
            visits[index] = { ...visits[index], ...updatedVisit };
            localStorage.setItem('ligaDoBem_visits', JSON.stringify(visits));
            return visits[index];
        }
        return null;
    }

    deleteVisit(id) {
        const visits = this.getVisits();
        const filteredVisits = visits.filter(v => v.id !== id);
        localStorage.setItem('ligaDoBem_visits', JSON.stringify(filteredVisits));
        return true;
    }

    // Gerenciamento de Adoções
    getAdoptions() {
        return JSON.parse(localStorage.getItem('ligaDoBem_adoptions') || '[]');
    }

    addAdoption(adoption) {
        const adoptions = this.getAdoptions();
        const newId = Math.max(...adoptions.map(a => a.id), 0) + 1;
        const newAdoption = {
            ...adoption,
            id: newId,
            dateStarted: new Date().toISOString(),
            status: 'Em Análise',
            documents: []
        };
        adoptions.push(newAdoption);
        localStorage.setItem('ligaDoBem_adoptions', JSON.stringify(adoptions));
        return newAdoption;
    }

    updateAdoption(id, updatedAdoption) {
        const adoptions = this.getAdoptions();
        const index = adoptions.findIndex(a => a.id === id);
        if (index !== -1) {
            adoptions[index] = { ...adoptions[index], ...updatedAdoption };
            localStorage.setItem('ligaDoBem_adoptions', JSON.stringify(adoptions));
            return adoptions[index];
        }
        return null;
    }

    // Gerenciamento de Padrinhos
    getSponsors() {
        return JSON.parse(localStorage.getItem('ligaDoBem_sponsors') || '[]');
    }

    addSponsor(sponsor) {
        const sponsors = this.getSponsors();
        const newId = Math.max(...sponsors.map(s => s.id), 0) + 1;
        const newSponsor = {
            ...sponsor,
            id: newId,
            dateStarted: new Date().toISOString(),
            status: 'Ativo',
            totalDonated: 0,
            monthlyReports: []
        };
        sponsors.push(newSponsor);
        localStorage.setItem('ligaDoBem_sponsors', JSON.stringify(sponsors));
        return newSponsor;
    }

    updateSponsor(id, updatedSponsor) {
        const sponsors = this.getSponsors();
        const index = sponsors.findIndex(s => s.id === id);
        if (index !== -1) {
            sponsors[index] = { ...sponsors[index], ...updatedSponsor };
            localStorage.setItem('ligaDoBem_sponsors', JSON.stringify(sponsors));
            return sponsors[index];
        }
        return null;
    }

    // Gerenciamento de Eventos
    getEvents() {
        return JSON.parse(localStorage.getItem('ligaDoBem_events') || '[]');
    }

    addEvent(event) {
        const events = this.getEvents();
        const newId = Math.max(...events.map(e => e.id), 0) + 1;
        const newEvent = {
            ...event,
            id: newId,
            dateCreated: new Date().toISOString(),
            participants: [],
            status: 'Ativo'
        };
        events.push(newEvent);
        localStorage.setItem('ligaDoBem_events', JSON.stringify(events));
        return newEvent;
    }

    updateEvent(id, updatedEvent) {
        const events = this.getEvents();
        const index = events.findIndex(e => e.id === id);
        if (index !== -1) {
            events[index] = { ...events[index], ...updatedEvent };
            localStorage.setItem('ligaDoBem_events', JSON.stringify(events));
            return events[index];
        }
        return null;
    }

    // Gerenciamento de Doações
    getDonations() {
        return JSON.parse(localStorage.getItem('ligaDoBem_donations') || '[]');
    }

    addDonation(donation) {
        const donations = this.getDonations();
        const newId = Math.max(...donations.map(d => d.id), 0) + 1;
        const newDonation = {
            ...donation,
            id: newId,
            date: new Date().toISOString(),
            status: 'Confirmada'
        };
        donations.push(newDonation);
        localStorage.setItem('ligaDoBem_donations', JSON.stringify(donations));
        return newDonation;
    }

    // Gerenciamento de Notificações
    getNotifications() {
        return JSON.parse(localStorage.getItem('ligaDoBem_notifications') || '[]');
    }

    addNotification(notification) {
        const notifications = this.getNotifications();
        const newId = Math.max(...notifications.map(n => n.id), 0) + 1;
        const newNotification = {
            ...notification,
            id: newId,
            date: new Date().toISOString(),
            read: false
        };
        notifications.unshift(newNotification);
        localStorage.setItem('ligaDoBem_notifications', JSON.stringify(notifications));
        return newNotification;
    }

    markNotificationAsRead(id) {
        const notifications = this.getNotifications();
        const notification = notifications.find(n => n.id === id);
        if (notification) {
            notification.read = true;
            localStorage.setItem('ligaDoBem_notifications', JSON.stringify(notifications));
        }
        return notification;
    }

    // Histórico Médico dos Pets
    addMedicalRecord(petId, record) {
        const pets = this.getPets();
        const pet = pets.find(p => p.id === petId);
        if (pet) {
            if (!pet.medicalHistory) pet.medicalHistory = [];
            const newRecord = {
                id: Date.now(),
                date: new Date().toISOString(),
                ...record
            };
            pet.medicalHistory.push(newRecord);
            localStorage.setItem('ligaDoBem_pets', JSON.stringify(pets));
            return newRecord;
        }
        return null;
    }

    // Backup e Restore
    exportData() {
        return {
            pets: this.getPets(),
            stats: this.getStats(),
            content: this.getContent(),
            messages: this.getMessages(),
            volunteers: this.getVolunteers(),
            visits: this.getVisits(),
            adoptions: this.getAdoptions(),
            sponsors: this.getSponsors(),
            events: this.getEvents(),
            donations: this.getDonations(),
            notifications: this.getNotifications(),
            exportDate: new Date().toISOString()
        };
    }

    importData(data) {
        if (data.pets) localStorage.setItem('ligaDoBem_pets', JSON.stringify(data.pets));
        if (data.stats) localStorage.setItem('ligaDoBem_stats', JSON.stringify(data.stats));
        if (data.content) localStorage.setItem('ligaDoBem_content', JSON.stringify(data.content));
        if (data.messages) localStorage.setItem('ligaDoBem_messages', JSON.stringify(data.messages));
        if (data.volunteers) localStorage.setItem('ligaDoBem_volunteers', JSON.stringify(data.volunteers));
        if (data.visits) localStorage.setItem('ligaDoBem_visits', JSON.stringify(data.visits));
        if (data.adoptions) localStorage.setItem('ligaDoBem_adoptions', JSON.stringify(data.adoptions));
        if (data.sponsors) localStorage.setItem('ligaDoBem_sponsors', JSON.stringify(data.sponsors));
        if (data.events) localStorage.setItem('ligaDoBem_events', JSON.stringify(data.events));
        if (data.donations) localStorage.setItem('ligaDoBem_donations', JSON.stringify(data.donations));
        if (data.notifications) localStorage.setItem('ligaDoBem_notifications', JSON.stringify(data.notifications));
        return true;
    }
}

// Instância global do gerenciador
const adminData = new AdminDataManager();

// Função para obter dados para o site público
function getPublicData() {
    return {
        pets: adminData.getPets().filter(pet => pet.status === 'Disponível'),
        stats: adminData.getStats(),
        content: adminData.getContent()
    };
}