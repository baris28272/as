module.exports = {
    name: "hesap-makinesi",
    code: `$djsEval[(async () => {
        const {
            hesapmakinesi
        } = require('kontmanstein-utils');
        
        await hesapmakinesi({
            message: message,
            embed: {
                title: 'Hesap Makinesi',
                color: 'RED',
                footer: 'Hesap Makinesi',
                timestamp: true,
            },
            disabledQuery: 'Hesap Makinesi devre dışı!',
            invalidQuery: 'Sağlanan denklem geçersiz!',
            othersMessage: 'Sadece <@{{author}}> butonları kullanabilir!',
        });
})()]`
}; 
