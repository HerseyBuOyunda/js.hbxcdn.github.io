// Herblox Oturum Bazlı Dinamik Güvenlik Protokolü
(function() {
    // Şifreleme için kullanılacak karakter havuzu
    const karakterler = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ıugftr';
    let dinamikSifre = '';
    
    // Güvenli ve uzun bir anahtar yapısı için karakter uzunluğu (32 Karakter)
    const anahtarUzunlugu = 32; 
    
    // Her sayfa açıldığında veya F5 yapıldığında tamamen benzersiz şifre üretir
    for (let i = 0; i < anahtarUzunlugu; i++) {
        const rastgeleIndis = Math.floor(Math.random() * karakterler.length);
        dinamikSifre += karakterler.charAt(rastgeleIndis);
    }

    // Üretilen anlık şifreyi test ve kontrol için tarayıcı konsoluna basıyoruz
    console.log("🔒 [Herblox Güvenlik] Yeni Oturum Şifresi Başarıyla Oluşturuldu: " + dinamikSifre);

    // Şifreyi tarayıcının geçici oturum hafızasına (SessionStorage) kaydediyoruz.
    // Sayfa kapatıldığında veya yenilendiğinde bu şifre otomatik imha olur ve yenisi gelir!
    sessionStorage.setItem('HBX_AKTIF_GUVENLIK_ANAHTARI', dinamikSifre);

    // C# Player, Luahbo Engine veya diğer CDN sunucuları bu anahtarı burayı çağırarak doğrular:
    window.GetHerbloxGuvenlikAnahtari = function() {
        return sessionStorage.getItem('HBX_AKTIF_GUVENLIK_ANAHTARI');
    };
})();
