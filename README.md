# Liga do Bem - Sistema de Gerenciamento

Sistema completo para gerenciamento de site de resgate animal com área administrativa.

## 📁 Arquivos do Sistema

### Arquivos Principais
- **`index.html`** - Site público principal (NOVO - use este)
- **`liga_do_bem_website.html`** - Site original (pode ser removido)
- **`admin.html`** - Área administrativa
- **`admin-data.js`** - Sistema de gerenciamento de dados
- **`admin-styles.css`** - Estilos da área administrativa

## 🚀 Como Usar

### 1. Acesso Público
- Abra o arquivo `index.html` no navegador
- Este é o site que os visitantes verão
- Todas as informações são carregadas automaticamente da área administrativa

### 2. Área Administrativa
- Abra o arquivo `admin.html` no navegador
- **Credenciais de acesso:**
  - **Usuário:** `admin`
  - **Senha:** `ligadobem2024`

### 3. Funcionalidades da Administração

#### Dashboard
- Visão geral das estatísticas
- Resumo de pets disponíveis
- Mensagens não lidas

#### Gerenciamento de Pets
- ✅ Adicionar novos pets
- ✅ Editar informações dos pets
- ✅ **Upload de fotos dos pets** (arrastar e soltar ou clique)
- ✅ Alterar status (Disponível, Em Processo, Adotado)
- ✅ Excluir pets
- ✅ Sistema de tags personalizadas
- ✅ Preview das fotos antes de salvar

#### Estatísticas
- Atualizar números do site:
  - Animais resgatados
  - Adoções realizadas
  - Voluntários ativos
  - Parceiros

#### Conteúdo
- Editar textos da página principal:
  - Título e subtítulo do hero
  - Texto "Sobre Nós"
  - Informações de contato

#### Mensagens
- Ver mensagens enviadas pelo formulário de contato
- Marcar como lidas
- Excluir mensagens

#### Backup
- Exportar todos os dados
- Importar dados de backup
- Resetar sistema para dados padrão

## 🔧 Características Técnicas

### Armazenamento
- Todos os dados são salvos no **localStorage** do navegador
- Não requer servidor ou banco de dados
- Dados persistem entre sessões

### Sincronização
- O site público atualiza automaticamente com os dados da administração
- Mudanças na admin aparecem imediatamente no site público
- Sistema de refresh automático a cada 30 segundos

### Responsividade
- Interface administrativa totalmente responsiva
- Site público otimizado para mobile
- Funciona em todos os dispositivos

## 📋 Fluxo de Trabalho Recomendado

### Para Adicionar um Novo Pet:
1. Acesse a área administrativa
2. Vá em "Pets" → "Novo Pet"
3. Preencha todas as informações
4. **Adicione uma foto do pet** (clique ou arraste a imagem)
5. Adicione tags relevantes
6. Salve o pet
7. O pet aparecerá automaticamente no site público com a foto

### Para Atualizar Estatísticas:
1. Acesse "Estatísticas" na admin
2. Atualize os números
3. Salve as alterações
4. Os números são atualizados no site instantaneamente

### Para Gerenciar Conteúdo:
1. Acesse "Conteúdo" na admin
2. Edite os textos desejados
3. Salve as alterações
4. O site público reflete as mudanças imediatamente

## 🔒 Segurança

### Credenciais Padrão
- **IMPORTANTE:** Altere as credenciais padrão no código
- Localize a variável `ADMIN_CREDENTIALS` em `admin.html`
- Altere o usuário e senha

### Backup Regular
- Faça backup dos dados regularmente
- Use a função "Baixar Backup" na área administrativa
- Guarde os arquivos de backup em local seguro

## 📸 Sistema de Fotos

### Upload de Fotos
- **Formatos aceitos:** JPG, PNG, GIF
- **Tamanho máximo:** 5MB por foto
- **Métodos de upload:**
  - Clique na área de upload
  - Arraste e solte a imagem
- **Armazenamento:** As fotos são convertidas para Base64 e salvas no localStorage
- **Preview:** Visualização imediata antes de salvar

### Exibição das Fotos
- Fotos aparecem nos cards dos pets no site público
- Modal com foto ampliada ao clicar no pet
- Fallback para emoji se não houver foto
- Responsivo em todos os dispositivos

## 🎨 Personalização

### Cores e Estilos
- Edite `admin-styles.css` para personalizar a área administrativa
- Edite os estilos em `index.html` para personalizar o site público

### Funcionalidades Adicionais
- O sistema é modular e pode ser expandido
- Adicione novas seções editando os arquivos HTML
- Expanda o `admin-data.js` para novas funcionalidades

## 🐛 Solução de Problemas

### Dados Não Aparecem
- Verifique se está usando `index.html` (não o arquivo antigo)
- Limpe o cache do navegador
- Verifique o console do navegador para erros

### Não Consegue Fazer Login
- Verifique as credenciais: `admin` / `ligadobem2024`
- Limpe o cache do navegador
- Tente em modo privado/incógnito

### Dados Perdidos
- Use a função de backup para restaurar
- Se não tiver backup, use "Resetar Sistema" para dados padrão

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este README primeiro
2. Teste em diferentes navegadores
3. Verifique o console do navegador para erros
4. Faça backup antes de fazer alterações importantes

---

**Desenvolvido para Liga do Bem** 🐾
Sistema de gerenciamento completo e fácil de usar!