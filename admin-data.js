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
                dateAdded: new Date().toISOString()
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
                dateAdded: new Date().toISOString()
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
                dateAdded: new Date().toISOString()
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
                dateAdded: new Date().toISOString()
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
                dateAdded: new Date().toISOString()
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
                dateAdded: new Date().toISOString()
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

        localStorage.setItem('ligaDoBem_pets', JSON.stringify(defaultPets));
        localStorage.setItem('ligaDoBem_stats', JSON.stringify(defaultStats));
        localStorage.setItem('ligaDoBem_content', JSON.stringify(defaultContent));
        localStorage.setItem('ligaDoBem_messages', JSON.stringify([]));
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

    // Backup e Restore
    exportData() {
        return {
            pets: this.getPets(),
            stats: this.getStats(),
            content: this.getContent(),
            messages: this.getMessages(),
            exportDate: new Date().toISOString()
        };
    }

    importData(data) {
        if (data.pets) localStorage.setItem('ligaDoBem_pets', JSON.stringify(data.pets));
        if (data.stats) localStorage.setItem('ligaDoBem_stats', JSON.stringify(data.stats));
        if (data.content) localStorage.setItem('ligaDoBem_content', JSON.stringify(data.content));
        if (data.messages) localStorage.setItem('ligaDoBem_messages', JSON.stringify(data.messages));
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