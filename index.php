<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guapa Beauty</title>
    <meta name="description" content="Beauty app for women" />
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  </head>

  <body>
    <div class="container">
      <!-- Background with gradient -->
      <div class="background">
        <div class="background-overlay"></div>
        <div class="background-gradient"></div>
      </div>
      
      <!-- Decorative elements -->
      <div class="decorative-circle-1"></div>
      <div class="decorative-circle-2"></div>
      <div class="decorative-circle-3"></div>
      <div class="decorative-circle-4"></div>
      
      <!-- Main content -->
      <div class="content">
        <header>
          <div class="logo">
            <img src="./images/logo.jpg" alt="">
          </div>
        </header>
        
        <main>
  <!-- Left side: Hero Text -->
  <div class="hero-text">
    <h1 class="text-arabic animate__animated animate__fadeIn animate__delay-1s">
      <span class="text-guapa">مهتمة بالتجميل</span> وتبحثين عن عروض، إجراءات، منتجات أو معلومات تجميلية مناسبة لك..
    </h1>
    <p class="text-arabic animate__animated animate__fadeIn animate__delay-2s">
      تبحثين عن مكان يمكنك من خلاله مشاركة تجاربك التجميلية، جمع النقاط، والحصول على خصومات إضافية.
    </p>
    <p class="text-arabic highlight-text animate__animated animate__fadeIn animate__delay-3s">
      .. الله يحييك معنا في تطبيق قوابا ..
    </p>
    <div class="action-text text-arabic animate__animated animate__fadeIn animate__delay-4s">
      إذا كنتِ مهتمة، سجلي اسمك ومعلوماتك وستصلك جميع العروض.
    </div>
    <div class="tagline text-arabic animate__animated animate__fadeIn animate__delay-5s">
      ..تذكري دائماً أن التجميل يعني قوابا..
    </div>
  </div>

  <!-- Right side: Registration Form -->
  <div class="registration-form animate__animated animate__zoomIn animate__delay-1s">
    <div class="form-container">
      <h2 class="form-title text-arabic">انضمي إلينا الآن</h2>
      <p class="form-subtitle text-arabic">سجلي للحصول على تجربة جمالية فريدة</p>
      
      <form id="registrationForm">
        <div class="form-group">
          <label for="name" class="form-label">الاسم</label>
          <input type="text" id="name" name="name" class="form-input" required placeholder="أدخلي اسمك الكامل">
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">البريد الإلكتروني</label>
          <input type="email" id="email" name="email" class="form-input" required placeholder="example@email.com">
        </div>
        
        <div class="form-group">
          <label for="phone" class="form-label">رقم الهاتف</label>
          <input type="tel" id="phone" name="phone" class="form-input" required placeholder="+966 5X XXX XXXX">
        </div>
        
        <div class="form-group">
          <button type="submit" class="submit-button animate__animated animate__pulse animate__infinite">
            تسجيل <span class="button-icon">→</span>
          </button>
        </div>
        
        <p class="privacy-note text-arabic">
          بالتسجيل، أنتِ توافقين على <a href="#" class="text-link">شروط الاستخدام</a> و <a href="#" class="text-link">سياسة الخصوصية</a>
        </p>
      </form>
    </div>
  </div>
</main>


        <!-- QR Codes -->
        <div class="qr-code">
          <img src="./images/qr-apple.png" alt="qr-apple">
          <img src="./images/qr-google.png" alt="qr-google">
        </div>
        
        
        <!-- Footer -->
        <footer>
          <p>© Guapa Beauty <span id="currentYear"></span> - جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
