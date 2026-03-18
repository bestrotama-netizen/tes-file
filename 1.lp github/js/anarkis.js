// NOTE:
//==================================================================
// offer trafee:        https://tr.digixera.store/ANARKIS
// offer:               https://aff.digixera.store/ANARKIS
// offer adverten:      https://adv.digixera.store/ANARKIS
// VISITOR INDO KE:     https://s.shopee.co.id/2g51O6X7Fi
//==================================================================

// WAJIB DI GANTI:
//==================================================================
// Offer cpa tinggal ganti (ctrl+h) "/ANARKIS" jadi ANARKIS anggota
// grup tombol cpa "const cardData = [" tinggal (ctrl+f)
// 
// DAFTAR KEY IKLAN YANG HARUS DIGANTI:
// 1. d241a4d5b72d1b9e434baca41b91f16a    - Banner sidebar kiri (160x600)
// 2. 58e09a0cc7454a6037c6ac7a3d62bb48   - Banner sidebar kanan (160x600)
// 3. 27264c7bb67f0a1b1eed8c3dd2e60795          - Banner horizontal 1 (desktop 728x90)
// 4. d31eb8b2e37a16828ea3cc1bcd756f1b          - Banner horizontal 1 (mobile 468x60)
// 5. 1096df8a2e104b8fd32779f186f57e68          - Banner horizontal 2 (desktop 728x90)
// 6. 5ccd907295e7bf28b0dcd119c87da0ac          - Banner horizontal 2 (mobile 468x60)
// 7. 8647373b2d90d7a86708284876649b50          - Banner horizontal 3 (desktop 728x90)
// 8. 5e7f2e014ff0eebd7e1ed674df0cb3c0          - Banner horizontal 3 (mobile 468x60)
// 9. 27264c7bb67f0a1b1eed8c3dd2e60795          - Banner horizontal 4 (desktop 728x90)
// 10. d31eb8b2e37a16828ea3cc1bcd756f1b         - Banner horizontal 4 (mobile 468x60)
// 11. 27264c7bb67f0a1b1eed8c3dd2e60795         - Banner horizontal 5 (desktop 728x90)
// 12. d31eb8b2e37a16828ea3cc1bcd756f1b         - Banner horizontal 5 (mobile 468x60)
// 13. 27264c7bb67f0a1b1eed8c3dd2e60795         - Banner horizontal 6 (desktop 728x90)
// 14. d31eb8b2e37a16828ea3cc1bcd756f1b         - Banner horizontal 6 (mobile 468x60)
// 15. 27264c7bb67f0a1b1eed8c3dd2e60795         - Banner horizontal 7 (desktop 728x90)
// 16. d31eb8b2e37a16828ea3cc1bcd756f1b         - Banner horizontal 7 (mobile 468x60)
// 17. 27264c7bb67f0a1b1eed8c3dd2e60795         - Banner horizontal 8 (desktop 728x90)
// 18. d31eb8b2e37a16828ea3cc1bcd756f1b         - Banner horizontal 8 (mobile 468x60)
// 19. 27264c7bb67f0a1b1eed8c3dd2e60795         - Banner horizontal 9 (desktop 728x90)
// 20. d31eb8b2e37a16828ea3cc1bcd756f1b         - Banner horizontal 9 (mobile 468x60)
// 21. 2daea32d7f1cd4ba7b38eab7adc66619                  - Banner natif/native
// 22. key_pop_ads                - iklan pop ads
// 23. key_social_bar             - social bar
// 24. 5010018                 - ID Histats anggota
// 25. cg              - ID Histats ciung grup
//==================================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    const COUNTRY_MAP = {
      'ID': 'https://s.shopee.co.id/2g51O6X7Fi',
      'SA': 'https://s.shopee.co.id/2g51O6X7Fi',
      'IN': 'https://tr.digixera.store/ANARKIS'
    };
    
    const country = request.headers.get('CF-IPCountry');

    // Redirect berdasarkan negara
    if (country && COUNTRY_MAP[country]) {
      const redirectResponse = Response.redirect(COUNTRY_MAP[country], 302);

      const headers = new Headers(redirectResponse.headers);
      headers.set("X-Robots-Tag", "noindex, nofollow");

      return new Response(null, {
        status: 302,
        headers
      });
    }

    let response;

    // Routing berdasarkan path
    if (pathname === '/trafee') {
      response = await handleTrafee();
    } else if (pathname === '/affore') {
      response = await handleaffore();
    } else if (pathname === '/adverten') {
      response = await handleAdverten();
    } else {
      response = await handleMain();
    }

    return addNoIndex(response);
  },
};

function addNoIndex(response) {
  const newHeaders = new Headers(response.headers);
  newHeaders.set("X-Robots-Tag", "noindex, nofollow");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}


// Fungsi untuk encode HTML dengan salt
function encodeHTML(html) {
  const salt = "SALT_" + Math.random().toString(36).substring(2, 15);
  const encoded = btoa(unescape(encodeURIComponent(html)));
  return { salt, encoded: salt + encoded };
}

// Fungsi untuk membuat response dengan HTML terobfuscate
function createObfuscatedResponse(html) {
  const { salt, encoded } = encodeHTML(html);
  
  const decoderScript = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
(function() {
    const encoded = "${encoded}";
    const salt = "${salt}";
    const html = decodeURIComponent(escape(atob(encoded.substring(salt.length))));
    document.open();
    document.write(html);
    document.close();
    
    // Re-initialize scripts after document.write
    setTimeout(function() {
        const scripts = document.querySelectorAll('script[data-reinit]');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            newScript.async = oldScript.async;
            document.head.appendChild(newScript);
            oldScript.remove();
        });
    }, 100);
})();
</script>
</head>
<body>
<noscript>Please enable JavaScript to view this page.</noscript>
</body>
</html>`;

  return new Response(decoderScript, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

// Handler untuk path utama "/"
function handleMain() {
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">

    <title>FLIRT4FREE Live Cams SEX-ANARKIS-MAIN</title>
    <link rel="icon" type="image/png" href="https://www.fuq.com/images/fuq/favicon.ico?3b51385a">
        <script>
// 🚫 Disable klik kanan
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 🚫 Disable shortcut inspect
document.addEventListener("keydown", function(e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Ctrl+U (View Source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }

});

// 🚫 Block iframe embedding
if (window.top !== window.self) {
  document.body.innerHTML = "";
}

</script>
    <!-- Preconnect untuk mempercepat loading -->
    <link rel="preconnect" href="https://cdn154.my.canva.site">
    <link rel="dns-prefetch" href="https://cdn154.my.canva.site">
    <link rel="preconnect" href="https://wrappedthorntelevision.com">
    <link rel="dns-prefetch" href="https://s10.histats.com">
    <link rel="dns-prefetch" href="https://sstatic1.histats.com">

    <!-- pop ads -->
    <script src="https://wrappedthorntelevision.com/1d/79/4a/key_pop_ads.js"></script>

    <!-- Histats.com  grup  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5001159,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5001159&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

        <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5010018,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5010018&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

            <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,cg,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?cg&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->


    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #1a1a2e;
            color: #fff;
            overflow-x: hidden;
        }

        .header {
            background-color: #16213e;
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 15px rgba(0,0,0,0.5);
            position: relative;
            z-index: 100;
        }

        .logo {
            font-size: 26px;
            font-weight: bold;
            color: #00d4ff;
            letter-spacing: -1px;
        }

        .logo span {
            color: #ff006e;
        }

        .nav-info {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 13px;
        }

        .live-indicator {
            width: 8px;
            height: 8px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 5px #00ff00; }
            50% { opacity: 0.5; box-shadow: 0 0 10px #00ff00; }
        }

        .header-buttons {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 10px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-login {
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-login:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #fff;
            transform: translateY(-2px);
        }

        .btn-create {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-create:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            height: 90px;
            margin: 5px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            max-width: 728px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            border: 2px dashed #999;
            min-height: 90px;
        }

        .banner-desktop {
            display: block;
        }

        .banner-mobile {
            display: none;
        }

        .sidebar-banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            width: 160px;
            height: 600px;
            position: fixed;
            top: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-rl;
            font-size: 12px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.3);
            border: 2px dashed #999;
            z-index: 50;
        }

        .sidebar-left {
            left: 15px;
        }

        .sidebar-right {
            right: 15px;
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 5px;
        }

        .content {
            margin: 0 190px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin: 5px 0;
        }

        .card {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: #2a2a3e;
            height: 180px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            z-index: 10;
        }

        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
            background: #2a2a3e;
        }

        .card:hover img {
            transform: scale(1.1);
        }
        
        .card img[data-src] {
            background: linear-gradient(90deg, #2a2a3e 25%, #35354e 50%, #2a2a3e 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .live-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #ff0844 0%, #ff4d6d 100%);
            color: #fff;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            z-index: 5;
            animation: livePulse 2s infinite;
        }

        @keyframes livePulse {
            0%, 100% {
                box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            }
            50% {
                box-shadow: 0 2px 20px rgba(255, 8, 68, 0.9);
            }
        }

        .viewer-count {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(5px);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 5;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .viewer-icon {
            width: 14px;
            height: 14px;
            display: inline-block;
        }

        .viewer-count span {
            transition: all 0.3s ease;
            display: inline-block;
        }

        .viewer-count.updating span {
            transform: scale(1.1);
            color: #00ff00;
        }

        .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
            padding: 15px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
        }

        .card:hover .card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00ff00 0%, #00cc00 100%);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.4);
            flex-shrink: 0;
            animation: pulse 2s infinite;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .card-title {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
            letter-spacing: 0.3px;
            line-height: 1.2;
        }

        .see-more-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            padding: 0;
        }

        .btn-see-more {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
        }

        .btn-see-more::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .btn-see-more:hover::before {
            left: 100%;
        }

        .btn-see-more:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        .btn-see-more:active {
            transform: translateY(-2px) scale(1.02);
        }

        .arrow-icon {
            width: 24px;
            height: 24px;
            transition: transform 0.3s ease;
        }

        .btn-see-more:hover .arrow-icon {
            transform: translateX(5px);
            animation: arrowBounce 0.6s ease infinite;
        }

        @keyframes arrowBounce {
            0%, 100% { transform: translateX(5px); }
            50% { transform: translateX(10px); }
        }

        @media (max-width: 1200px) {
            .content {
                margin: 0 170px;
            }
        }

        @media (max-width: 992px) {
            .sidebar-banner {
                display: none;
            }
            .content {
                margin: 0;
            }
        }

        @media (max-width: 768px) {
            .header {
                flex-wrap: wrap;
                gap: 10px;
                padding: 15px 20px;
            }
            
            .nav-info {
                order: 3;
                width: 100%;
                justify-content: center;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            
            .card {
                height: 200px;
            }

            .banner {
                height: 60px;
                max-width: 468px;
                font-size: 14px;
                min-height: 60px;
            }

            .banner-desktop {
                display: none;
            }

            .banner-mobile {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .logo {
                font-size: 20px;
            }
            
            .btn {
                padding: 8px 16px;
                font-size: 12px;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }

            .card {
                height: 180px;
            }

            .banner {
                height: 60px;
                max-width: 100%;
                width: 100%;
                font-size: 12px;
            }

            .btn-see-more {
                padding: 14px 35px;
                font-size: 15px;
                gap: 8px;
            }

            .arrow-icon {
                width: 20px;
                height: 20px;
            }

            .see-more-container {
                margin: 5px 0;
            }

            .card-title {
                font-size: 13px;
            }

            .viewer-count {
                font-size: 10px;
                padding: 4px 8px;
            }

            .viewer-icon {
                width: 12px;
                height: 12px;
            }

            .live-badge {
                font-size: 10px;
                padding: 4px 10px;
            }
        }

        @media (max-width: 360px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 5px;
            }

            .card {
                height: 160px;
            }

            .container {
                padding: 3px;
            }
        }
    </style>
</head>
<body>
    <!-- social bar -->
    <script src="https://wrappedthorntelevision.com/f0/06/c5/key_social_bar.js"></script>

    <div class="header">
        <div class="logo">FLIRT<span>4</span>FREE</div>
        <div class="nav-info">
            <div class="live-indicator"></div>
            <span>Live Cams - 765 models online</span>
        </div>
        <div class="header-buttons">
            <a href="https://tr.digixera.store/ANARKIS">
            <button class="btn btn-login">Login</button>
            </a>

            <a href="https://tr.digixera.store/ANARKIS">
            <button class="btn btn-create">Create Account</button>
            </a>
        </div>
    </div>
    
    <!-- Banner Sidebar Kiri (160x600) -->
    <div class="sidebar-banner sidebar-left">
    <script>
      atOptions = {
        'key' : 'd241a4d5b72d1b9e434baca41b91f16a',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/d241a4d5b72d1b9e434baca41b91f16a/invoke.js"></script>
    </div>
    
    <!-- Banner Sidebar Kanan (160x600) -->
    <div class="sidebar-banner sidebar-right">
        <script>
      atOptions = {
        'key' : '58e09a0cc7454a6037c6ac7a3d62bb48',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/58e09a0cc7454a6037c6ac7a3d62bb48/invoke.js"></script>
    </div>

    <div class="container">
        <div class="content">
            
            <!-- Banner 1 (Atas) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '5ec89f5f792bc30bc98fcaa82eb1a64d',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://www.highperformanceformat.com/5ec89f5f792bc30bc98fcaa82eb1a64d/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '574d5cc68718edcaf11326ccbb4f9e47',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://www.highperformanceformat.com/574d5cc68718edcaf11326ccbb4f9e47/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery1"></div>
            
            <!-- Banner 2 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '1096df8a2e104b8fd32779f186f57e68',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/1096df8a2e104b8fd32779f186f57e68/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5ccd907295e7bf28b0dcd119c87da0ac',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5ccd907295e7bf28b0dcd119c87da0ac/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery2"></div>
            
            <!-- Banner 3 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '8647373b2d90d7a86708284876649b50',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/8647373b2d90d7a86708284876649b50/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5e7f2e014ff0eebd7e1ed674df0cb3c0',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5e7f2e014ff0eebd7e1ed674df0cb3c0/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery3"></div>
            
            <!-- Banner 4 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery4"></div>
            
            <!-- Banner 5 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery5"></div>
            
            <!-- Banner 6 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery6"></div>
            
            <div class="see-more-container">
                <a href="https://tr.digixera.store/ANARKIS" class="btn-see-more">
                    <span>See More Models</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- Banner 7 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 8 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 9 (Bawah) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner Natif/Native -->
            <script async="async" data-cfasync="false" src="https://wrappedthorntelevision.com/2daea32d7f1cd4ba7b38eab7adc66619/invoke.js"></script>
            <div id="container-2daea32d7f1cd4ba7b38eab7adc66619"></div>
        </div>
    </div>

    <script data-reinit>
const cardData = [
    { title: 'Anastasia', img: 'https://cdn154.my.canva.site/_assets/media/2efb176ce3fe7ffd13574d9a45f01566.png', link: 'https://tr.digixera.store/ANARKIS', viewers: 1247 },
    { title: 'Natasha', img: 'https://cdn154.my.canva.site/_assets/media/4a8328e18e5b39a3b1492ef9d20cf16a.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 892 },
    { title: 'Katerina', img: 'https://cdn154.my.canva.site/_assets/media/4bc84b1db4310492524cf56a21a9d309.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2156 },
    { title: 'Isabella', img: 'https://cdn154.my.canva.site/_assets/media/4c6ff097c82222c50b4b4b5eb913604d.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 734 },
    { title: 'Sofia', img: 'https://cdn154.my.canva.site/_assets/media/4e8880481e141cfc404a37ba95a0db33.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1523 },
    { title: 'Oksana', img: 'https://cdn154.my.canva.site/_assets/media/4fd5dc77f3f5aaebb5320a3f7397e883.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 967 },
    { title: 'Viktoria', img: 'https://cdn154.my.canva.site/_assets/media/6a7fe0b69110aa304726fd20096ed2e9.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1834 },
    { title: 'Elena', img: 'https://cdn154.my.canva.site/_assets/media/6b9f31e627594652740562e840b3b543.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1092 },
    { title: 'Alina', img: 'https://cdn154.my.canva.site/_assets/media/6fce22cb8df6fa507cb1ced475c70323.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2487 },
    { title: 'Svetlana', img: 'https://cdn154.my.canva.site/_assets/media/8aa85119f26aa668524d5fb2f00a0b53.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 645 },
    { title: 'Daria', img: 'https://cdn154.my.canva.site/_assets/media/8ddee0bf1bf072af591c964738c5c079.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Olga', img: 'https://cdn154.my.canva.site/_assets/media/9bcafed6943e1e331db2e56e0694936e.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 823 },
    { title: 'Maria', img: 'https://cdn154.my.canva.site/_assets/media/42b29bbad2e2de1763d6ba5faab539bb.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1945 },
    { title: 'Yulia', img: 'https://cdn154.my.canva.site/_assets/media/51d83541d1bf1f1b7fe871e3bd67deb1.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Valentina', img: 'https://cdn154.my.canva.site/_assets/media/57a1756828842dbad8b01e4decc03194.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2301 },
    { title: 'Irina', img: 'https://cdn154.my.canva.site/_assets/media/60baf7b416180744e0c473ab51833f4b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 789 },
    { title: 'Tatiana', img: 'https://cdn154.my.canva.site/_assets/media/62e8689400a5b688ccec8d6bc6cc22de.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Polina', img: 'https://cdn154.my.canva.site/_assets/media/71ce605c197e64941e60350b3be3baf7.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Angelina', img: 'https://cdn154.my.canva.site/_assets/media/166ffc2e4f9895ddbb075bb5058b6f9b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2089 },
    { title: 'Diana', img: 'https://cdn154.my.canva.site/_assets/media/639efdddffb8be77d2849ead049891e1.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Karina', img: 'https://cdn154.my.canva.site/_assets/media/872ad70342edba28b73102dbf63de74f.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Larisa', img: 'https://cdn154.my.canva.site/_assets/media/976cbe59e4c431a5091996b88c8089ce.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1723 },
    { title: 'Milana', img: 'https://cdn154.my.canva.site/_assets/media/03874e13f073ac1eaf7f112eebbb4a00.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2234 },
    { title: 'Natalia', img: 'https://cdn154.my.canva.site/_assets/media/411151c1295a1dba642c4e98c5cf45b3.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 698 },
    { title: 'Alexandra', img: 'https://cdn154.my.canva.site/_assets/media/491356c33f614994117cf26e572eb95b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1890 },
    { title: 'Veronica', img: 'https://cdn154.my.canva.site/_assets/media/a01acfbcea7b527781d7d0b456f2f7ba.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1045 },
    { title: 'Kristina', img: 'https://cdn154.my.canva.site/_assets/media/a487911e8dea69853de9ddd37cc6b591.png', link: 'https://adv.digixera.store/ANARKIS', viewers: 2567 },
    { title: 'Ekaterina', img: 'https://cdn154.my.canva.site/_assets/media/a8117723268e1e16b3f8e05a178ec88a.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1334 },
    { title: 'Anna', img: 'https://cdn154.my.canva.site/_assets/media/b5a98ccfde1dfcd8b979763df5b39d11.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1998 },
    { title: 'Ludmila', img: 'https://cdn154.my.canva.site/_assets/media/b621ab3ed909ff37a7019f78bbd6f059.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 754 },
    { title: 'Nadia', img: 'https://cdn154.my.canva.site/_assets/media/bab175273530c98ed9efa8d86ca0dfaa.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Yana', img: 'https://cdn154.my.canva.site/_assets/media/bbe37143e09b200765584c88d357b4b1.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2134 },
    { title: 'Lena', img: 'https://cdn154.my.canva.site/_assets/media/bbead4846b7ef97a45e97115874f6845.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 987 },
    { title: 'Arina', img: 'https://cdn154.my.canva.site/_assets/media/c47f9266f68748f04e41ff16bf49a71b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Veronika', img: 'https://cdn154.my.canva.site/_assets/media/c4602bdbdfd95a39185007578adbea49.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Marina', img: 'https://cdn154.my.canva.site/_assets/media/cce712c113dc31214094458d3b9b35e4.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2345 },
    { title: 'Galina', img: 'https://cdn154.my.canva.site/_assets/media/cd696fa67f9ae0b3057241b037100214.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Zlata', img: 'https://cdn154.my.canva.site/_assets/media/cd1267362397b6dcc66366f89482e5e4.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Ksenia', img: 'https://cdn154.my.canva.site/_assets/media/d5d8bc380162696db5427fe1bf34f2cc.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2098 },
    { title: 'Varvara', img: 'https://cdn154.my.canva.site/_assets/media/d8edd3707530b27929f9c91ce5270e76.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1123 },
    { title: 'Elizaveta', img: 'https://cdn154.my.canva.site/_assets/media/d46d55981369ec8ef7aa6ce867cedf16.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1789 },
    { title: 'Evgenia', img: 'https://cdn154.my.canva.site/_assets/media/dad66e93f38b273811c24747b18476e9.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Dominika', img: 'https://cdn154.my.canva.site/_assets/media/dc4d87e31746a8e89507640ecfcef924.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2456 },
    { title: 'Raisa', img: 'https://cdn154.my.canva.site/_assets/media/e2bafd60cfc24bf04b2f1ca3296d3c33.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1345 },
    { title: 'Nina', img: 'https://cdn154.my.canva.site/_assets/media/e532508e10d3d35c334fd101e5dd2ced.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1876 },
    { title: 'Zoya', img: 'https://cdn154.my.canva.site/_assets/media/f89d5f881cd247d46f05fff4a9323b64.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 765 },
    { title: 'Sabina', img: 'https://cdn154.my.canva.site/_assets/media/fcf871593ec12f1981556cbc12ac6e03.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2167 },
    { title: 'Tamara', img: 'https://cdn154.my.canva.site/_assets/media/fd5f7f8a86a864fb52884b7be81a7ad7.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1432 }
];

        function lazyLoadImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px'
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        function createCard(data) {
            const card = document.createElement('a');
            card.href = data.link;
            card.className = 'card';
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = '<img data-src="' + data.img + '" alt="' + data.title + '">' +
                '<div class="viewer-count">' +
                    '<svg class="viewer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="white"/>' +
                    '</svg>' +
                    '<span>' + data.viewers.toLocaleString() + '</span>' +
                '</div>' +
                '<div class="live-badge">LIVE</div>' +
                '<div class="card-overlay">' +
                    '<div class="status-dot"></div>' +
                    '<div class="card-title">' + data.title + '</div>' +
                '</div>';
            
            return card;
        }

        const gallery1 = document.getElementById('gallery1');
        cardData.slice(0, 8).forEach(function(data) {
            gallery1.appendChild(createCard(data));
        });

        const gallery2 = document.getElementById('gallery2');
        cardData.slice(8, 16).forEach(function(data) {
            gallery2.appendChild(createCard(data));
        });

        const gallery3 = document.getElementById('gallery3');
        cardData.slice(16, 24).forEach(function(data) {
            gallery3.appendChild(createCard(data));
        });

        const gallery4 = document.getElementById('gallery4');
        cardData.slice(24, 32).forEach(function(data) {
            gallery4.appendChild(createCard(data));
        });

        const gallery5 = document.getElementById('gallery5');
        cardData.slice(32, 40).forEach(function(data) {
            gallery5.appendChild(createCard(data));
        });

        const gallery6 = document.getElementById('gallery6');
        cardData.slice(40, 48).forEach(function(data) {
            gallery6.appendChild(createCard(data));
        });

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', lazyLoadImages);
        } else {
            lazyLoadImages();
        }

        function updateViewerCounts() {
            const allCards = document.querySelectorAll('.card');
            
            allCards.forEach(function(card, index) {
                const viewerCountElement = card.querySelector('.viewer-count span');
                const viewerBadge = card.querySelector('.viewer-count');
                
                if (viewerCountElement && cardData[index]) {
                    if (Math.random() > 0.5) {
                        const change = Math.floor(Math.random() * 200) - 50;
                        let newViewers = cardData[index].viewers + change;
                        
                        newViewers = Math.max(100, Math.min(5000, newViewers));
                        
                        cardData[index].viewers = newViewers;
                        
                        viewerBadge.classList.add('updating');
                        
                        viewerCountElement.textContent = newViewers.toLocaleString();
                        
                        setTimeout(function() {
                            viewerBadge.classList.remove('updating');
                        }, 300);
                    }
                }
            });
        }

        function scheduleNextUpdate() {
            const interval = Math.floor(Math.random() * 2000) + 3000;
            setTimeout(function() {
                updateViewerCounts();
                scheduleNextUpdate();
            }, interval);
        }

        scheduleNextUpdate();
    </script>
</body>
</html>`;

  return createObfuscatedResponse(html);
}

// Handler untuk path "/trafee"
function handleTrafee() {
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">

    <title>FLIRT4FREE Live Cams SEX-ANARKIS-Trafee</title>
    <link rel="icon" type="image/png" href="https://www.fuq.com/images/fuq/favicon.ico?3b51385a">
        <script>
// 🚫 Disable klik kanan
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 🚫 Disable shortcut inspect
document.addEventListener("keydown", function(e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Ctrl+U (View Source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }

});

// 🚫 Block iframe embedding
if (window.top !== window.self) {
  document.body.innerHTML = "";
}

</script>
    <!-- Preconnect untuk mempercepat loading -->
    <link rel="preconnect" href="https://cdn154.my.canva.site">
    <link rel="dns-prefetch" href="https://cdn154.my.canva.site">
    <link rel="preconnect" href="https://wrappedthorntelevision.com">
    <link rel="dns-prefetch" href="https://s10.histats.com">
    <link rel="dns-prefetch" href="https://sstatic1.histats.com">

        <!-- pop ads -->
    <script src="https://wrappedthorntelevision.com/1d/79/4a/key_pop_ads.js"></script>

    <!-- Histats.com  grup  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5001159,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5001159&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

        <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5010018,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5010018&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

                <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,cg,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?cg&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->


    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #1a1a2e;
            color: #fff;
            overflow-x: hidden;
        }

        .header {
            background-color: #16213e;
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 15px rgba(0,0,0,0.5);
            position: relative;
            z-index: 100;
        }

        .logo {
            font-size: 26px;
            font-weight: bold;
            color: #00d4ff;
            letter-spacing: -1px;
        }

        .logo span {
            color: #ff006e;
        }

        .nav-info {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 13px;
        }

        .live-indicator {
            width: 8px;
            height: 8px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 5px #00ff00; }
            50% { opacity: 0.5; box-shadow: 0 0 10px #00ff00; }
        }

        .header-buttons {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 10px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-login {
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-login:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #fff;
            transform: translateY(-2px);
        }

        .btn-create {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-create:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            height: 90px;
            margin: 5px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            max-width: 728px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            border: 2px dashed #999;
            min-height: 90px;
        }

        .banner-desktop {
            display: block;
        }

        .banner-mobile {
            display: none;
        }

        .sidebar-banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            width: 160px;
            height: 600px;
            position: fixed;
            top: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-rl;
            font-size: 12px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.3);
            border: 2px dashed #999;
            z-index: 50;
        }

        .sidebar-left {
            left: 15px;
        }

        .sidebar-right {
            right: 15px;
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 5px;
        }

        .content {
            margin: 0 190px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin: 5px 0;
        }

        .card {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: #2a2a3e;
            height: 180px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            z-index: 10;
        }

        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
            background: #2a2a3e;
        }

        .card:hover img {
            transform: scale(1.1);
        }
        
        .card img[data-src] {
            background: linear-gradient(90deg, #2a2a3e 25%, #35354e 50%, #2a2a3e 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .live-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #ff0844 0%, #ff4d6d 100%);
            color: #fff;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            z-index: 5;
            animation: livePulse 2s infinite;
        }

        @keyframes livePulse {
            0%, 100% {
                box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            }
            50% {
                box-shadow: 0 2px 20px rgba(255, 8, 68, 0.9);
            }
        }

        .viewer-count {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(5px);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 5;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .viewer-icon {
            width: 14px;
            height: 14px;
            display: inline-block;
        }

        .viewer-count span {
            transition: all 0.3s ease;
            display: inline-block;
        }

        .viewer-count.updating span {
            transform: scale(1.1);
            color: #00ff00;
        }

        .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
            padding: 15px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
        }

        .card:hover .card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00ff00 0%, #00cc00 100%);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.4);
            flex-shrink: 0;
            animation: pulse 2s infinite;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .card-title {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
            letter-spacing: 0.3px;
            line-height: 1.2;
        }

        .see-more-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            padding: 0;
        }

        .btn-see-more {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
        }

        .btn-see-more::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .btn-see-more:hover::before {
            left: 100%;
        }

        .btn-see-more:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        .btn-see-more:active {
            transform: translateY(-2px) scale(1.02);
        }

        .arrow-icon {
            width: 24px;
            height: 24px;
            transition: transform 0.3s ease;
        }

        .btn-see-more:hover .arrow-icon {
            transform: translateX(5px);
            animation: arrowBounce 0.6s ease infinite;
        }

        @keyframes arrowBounce {
            0%, 100% { transform: translateX(5px); }
            50% { transform: translateX(10px); }
        }

        @media (max-width: 1200px) {
            .content {
                margin: 0 170px;
            }
        }

        @media (max-width: 992px) {
            .sidebar-banner {
                display: none;
            }
            .content {
                margin: 0;
            }
        }

        @media (max-width: 768px) {
            .header {
                flex-wrap: wrap;
                gap: 10px;
                padding: 15px 20px;
            }
            
            .nav-info {
                order: 3;
                width: 100%;
                justify-content: center;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            
            .card {
                height: 200px;
            }

            .banner {
                height: 60px;
                max-width: 468px;
                font-size: 14px;
                min-height: 60px;
            }

            .banner-desktop {
                display: none;
            }

            .banner-mobile {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .logo {
                font-size: 20px;
            }
            
            .btn {
                padding: 8px 16px;
                font-size: 12px;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }

            .card {
                height: 180px;
            }

            .banner {
                height: 60px;
                max-width: 100%;
                width: 100%;
                font-size: 12px;
            }

            .btn-see-more {
                padding: 14px 35px;
                font-size: 15px;
                gap: 8px;
            }

            .arrow-icon {
                width: 20px;
                height: 20px;
            }

            .see-more-container {
                margin: 5px 0;
            }

            .card-title {
                font-size: 13px;
            }

            .viewer-count {
                font-size: 10px;
                padding: 4px 8px;
            }

            .viewer-icon {
                width: 12px;
                height: 12px;
            }

            .live-badge {
                font-size: 10px;
                padding: 4px 10px;
            }
        }

        @media (max-width: 360px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 5px;
            }

            .card {
                height: 160px;
            }

            .container {
                padding: 3px;
            }
        }
    </style>
</head>
<body>
    <!-- social bar -->
    <script src="https://wrappedthorntelevision.com/f0/06/c5/key_social_bar.js"></script>

    <div class="header">
        <div class="logo">FLIRT<span>4</span>FREE</div>
        <div class="nav-info">
            <div class="live-indicator"></div>
            <span>Live Cams - 765 models online</span>
        </div>
        <div class="header-buttons">
            <a href="https://tr.digixera.store/ANARKIS">
            <button class="btn btn-login">Login</button>
            </a>

            <a href="https://tr.digixera.store/ANARKIS">
            <button class="btn btn-create">Create Account</button>
            </a>
        </div>
    </div>
    
    <!-- Banner Sidebar Kiri (160x600) -->
    <div class="sidebar-banner sidebar-left">
    <script>
      atOptions = {
        'key' : 'd241a4d5b72d1b9e434baca41b91f16a',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/d241a4d5b72d1b9e434baca41b91f16a/invoke.js"></script>
    </div>
    
    <!-- Banner Sidebar Kanan (160x600) -->
    <div class="sidebar-banner sidebar-right">
        <script>
      atOptions = {
        'key' : '58e09a0cc7454a6037c6ac7a3d62bb48',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/58e09a0cc7454a6037c6ac7a3d62bb48/invoke.js"></script>
    </div>

    <div class="container">
        <div class="content">
            
            <!-- Banner 1 (Atas) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery1"></div>
            
            <!-- Banner 2 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '1096df8a2e104b8fd32779f186f57e68',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/1096df8a2e104b8fd32779f186f57e68/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5ccd907295e7bf28b0dcd119c87da0ac',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5ccd907295e7bf28b0dcd119c87da0ac/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery2"></div>
            
            <!-- Banner 3 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '8647373b2d90d7a86708284876649b50',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/8647373b2d90d7a86708284876649b50/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5e7f2e014ff0eebd7e1ed674df0cb3c0',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5e7f2e014ff0eebd7e1ed674df0cb3c0/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery3"></div>
            
            <!-- Banner 4 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery4"></div>
            
            <!-- Banner 5 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery5"></div>
            
            <!-- Banner 6 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery6"></div>
            
            <div class="see-more-container">
                <a href="https://tr.digixera.store/ANARKIS" class="btn-see-more">
                    <span>See More Models</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- Banner 7 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 8 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 9 (Bawah) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner Natif/Native -->
            <script async="async" data-cfasync="false" src="https://wrappedthorntelevision.com/2daea32d7f1cd4ba7b38eab7adc66619/invoke.js"></script>
            <div id="container-2daea32d7f1cd4ba7b38eab7adc66619"></div>
        </div>
    </div>

    <script data-reinit>
const cardData = [
    { title: 'Anastasia', img: 'https://cdn154.my.canva.site/_assets/media/2efb176ce3fe7ffd13574d9a45f01566.png', link: 'https://tr.digixera.store/ANARKIS', viewers: 1247 },
    { title: 'Natasha', img: 'https://cdn154.my.canva.site/_assets/media/4a8328e18e5b39a3b1492ef9d20cf16a.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 892 },
    { title: 'Katerina', img: 'https://cdn154.my.canva.site/_assets/media/4bc84b1db4310492524cf56a21a9d309.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2156 },
    { title: 'Isabella', img: 'https://cdn154.my.canva.site/_assets/media/4c6ff097c82222c50b4b4b5eb913604d.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 734 },
    { title: 'Sofia', img: 'https://cdn154.my.canva.site/_assets/media/4e8880481e141cfc404a37ba95a0db33.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1523 },
    { title: 'Oksana', img: 'https://cdn154.my.canva.site/_assets/media/4fd5dc77f3f5aaebb5320a3f7397e883.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 967 },
    { title: 'Viktoria', img: 'https://cdn154.my.canva.site/_assets/media/6a7fe0b69110aa304726fd20096ed2e9.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1834 },
    { title: 'Elena', img: 'https://cdn154.my.canva.site/_assets/media/6b9f31e627594652740562e840b3b543.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1092 },
    { title: 'Alina', img: 'https://cdn154.my.canva.site/_assets/media/6fce22cb8df6fa507cb1ced475c70323.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2487 },
    { title: 'Svetlana', img: 'https://cdn154.my.canva.site/_assets/media/8aa85119f26aa668524d5fb2f00a0b53.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 645 },
    { title: 'Daria', img: 'https://cdn154.my.canva.site/_assets/media/8ddee0bf1bf072af591c964738c5c079.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Olga', img: 'https://cdn154.my.canva.site/_assets/media/9bcafed6943e1e331db2e56e0694936e.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 823 },
    { title: 'Maria', img: 'https://cdn154.my.canva.site/_assets/media/42b29bbad2e2de1763d6ba5faab539bb.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1945 },
    { title: 'Yulia', img: 'https://cdn154.my.canva.site/_assets/media/51d83541d1bf1f1b7fe871e3bd67deb1.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Valentina', img: 'https://cdn154.my.canva.site/_assets/media/57a1756828842dbad8b01e4decc03194.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2301 },
    { title: 'Irina', img: 'https://cdn154.my.canva.site/_assets/media/60baf7b416180744e0c473ab51833f4b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 789 },
    { title: 'Tatiana', img: 'https://cdn154.my.canva.site/_assets/media/62e8689400a5b688ccec8d6bc6cc22de.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Polina', img: 'https://cdn154.my.canva.site/_assets/media/71ce605c197e64941e60350b3be3baf7.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Angelina', img: 'https://cdn154.my.canva.site/_assets/media/166ffc2e4f9895ddbb075bb5058b6f9b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2089 },
    { title: 'Diana', img: 'https://cdn154.my.canva.site/_assets/media/639efdddffb8be77d2849ead049891e1.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Karina', img: 'https://cdn154.my.canva.site/_assets/media/872ad70342edba28b73102dbf63de74f.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Larisa', img: 'https://cdn154.my.canva.site/_assets/media/976cbe59e4c431a5091996b88c8089ce.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1723 },
    { title: 'Milana', img: 'https://cdn154.my.canva.site/_assets/media/03874e13f073ac1eaf7f112eebbb4a00.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2234 },
    { title: 'Natalia', img: 'https://cdn154.my.canva.site/_assets/media/411151c1295a1dba642c4e98c5cf45b3.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 698 },
    { title: 'Alexandra', img: 'https://cdn154.my.canva.site/_assets/media/491356c33f614994117cf26e572eb95b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1890 },
    { title: 'Veronica', img: 'https://cdn154.my.canva.site/_assets/media/a01acfbcea7b527781d7d0b456f2f7ba.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1045 },
    { title: 'Kristina', img: 'https://cdn154.my.canva.site/_assets/media/a487911e8dea69853de9ddd37cc6b591.png', link: 'https://tr.digixera.store/ANARKIS', viewers: 2567 },
    { title: 'Ekaterina', img: 'https://cdn154.my.canva.site/_assets/media/a8117723268e1e16b3f8e05a178ec88a.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1334 },
    { title: 'Anna', img: 'https://cdn154.my.canva.site/_assets/media/b5a98ccfde1dfcd8b979763df5b39d11.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1998 },
    { title: 'Ludmila', img: 'https://cdn154.my.canva.site/_assets/media/b621ab3ed909ff37a7019f78bbd6f059.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 754 },
    { title: 'Nadia', img: 'https://cdn154.my.canva.site/_assets/media/bab175273530c98ed9efa8d86ca0dfaa.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Yana', img: 'https://cdn154.my.canva.site/_assets/media/bbe37143e09b200765584c88d357b4b1.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2134 },
    { title: 'Lena', img: 'https://cdn154.my.canva.site/_assets/media/bbead4846b7ef97a45e97115874f6845.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 987 },
    { title: 'Arina', img: 'https://cdn154.my.canva.site/_assets/media/c47f9266f68748f04e41ff16bf49a71b.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Veronika', img: 'https://cdn154.my.canva.site/_assets/media/c4602bdbdfd95a39185007578adbea49.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Marina', img: 'https://cdn154.my.canva.site/_assets/media/cce712c113dc31214094458d3b9b35e4.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2345 },
    { title: 'Galina', img: 'https://cdn154.my.canva.site/_assets/media/cd696fa67f9ae0b3057241b037100214.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Zlata', img: 'https://cdn154.my.canva.site/_assets/media/cd1267362397b6dcc66366f89482e5e4.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Ksenia', img: 'https://cdn154.my.canva.site/_assets/media/d5d8bc380162696db5427fe1bf34f2cc.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2098 },
    { title: 'Varvara', img: 'https://cdn154.my.canva.site/_assets/media/d8edd3707530b27929f9c91ce5270e76.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1123 },
    { title: 'Elizaveta', img: 'https://cdn154.my.canva.site/_assets/media/d46d55981369ec8ef7aa6ce867cedf16.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1789 },
    { title: 'Evgenia', img: 'https://cdn154.my.canva.site/_assets/media/dad66e93f38b273811c24747b18476e9.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Dominika', img: 'https://cdn154.my.canva.site/_assets/media/dc4d87e31746a8e89507640ecfcef924.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2456 },
    { title: 'Raisa', img: 'https://cdn154.my.canva.site/_assets/media/e2bafd60cfc24bf04b2f1ca3296d3c33.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1345 },
    { title: 'Nina', img: 'https://cdn154.my.canva.site/_assets/media/e532508e10d3d35c334fd101e5dd2ced.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1876 },
    { title: 'Zoya', img: 'https://cdn154.my.canva.site/_assets/media/f89d5f881cd247d46f05fff4a9323b64.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 765 },
    { title: 'Sabina', img: 'https://cdn154.my.canva.site/_assets/media/fcf871593ec12f1981556cbc12ac6e03.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 2167 },
    { title: 'Tamara', img: 'https://cdn154.my.canva.site/_assets/media/fd5f7f8a86a864fb52884b7be81a7ad7.jpg', link: 'https://tr.digixera.store/ANARKIS', viewers: 1432 }
];

        function lazyLoadImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px'
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        function createCard(data) {
            const card = document.createElement('a');
            card.href = data.link;
            card.className = 'card';
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = '<img data-src="' + data.img + '" alt="' + data.title + '">' +
                '<div class="viewer-count">' +
                    '<svg class="viewer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="white"/>' +
                    '</svg>' +
                    '<span>' + data.viewers.toLocaleString() + '</span>' +
                '</div>' +
                '<div class="live-badge">LIVE</div>' +
                '<div class="card-overlay">' +
                    '<div class="status-dot"></div>' +
                    '<div class="card-title">' + data.title + '</div>' +
                '</div>';
            
            return card;
        }

        const gallery1 = document.getElementById('gallery1');
        cardData.slice(0, 8).forEach(function(data) {
            gallery1.appendChild(createCard(data));
        });

        const gallery2 = document.getElementById('gallery2');
        cardData.slice(8, 16).forEach(function(data) {
            gallery2.appendChild(createCard(data));
        });

        const gallery3 = document.getElementById('gallery3');
        cardData.slice(16, 24).forEach(function(data) {
            gallery3.appendChild(createCard(data));
        });

        const gallery4 = document.getElementById('gallery4');
        cardData.slice(24, 32).forEach(function(data) {
            gallery4.appendChild(createCard(data));
        });

        const gallery5 = document.getElementById('gallery5');
        cardData.slice(32, 40).forEach(function(data) {
            gallery5.appendChild(createCard(data));
        });

        const gallery6 = document.getElementById('gallery6');
        cardData.slice(40, 48).forEach(function(data) {
            gallery6.appendChild(createCard(data));
        });

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', lazyLoadImages);
        } else {
            lazyLoadImages();
        }

        function updateViewerCounts() {
            const allCards = document.querySelectorAll('.card');
            
            allCards.forEach(function(card, index) {
                const viewerCountElement = card.querySelector('.viewer-count span');
                const viewerBadge = card.querySelector('.viewer-count');
                
                if (viewerCountElement && cardData[index]) {
                    if (Math.random() > 0.5) {
                        const change = Math.floor(Math.random() * 200) - 50;
                        let newViewers = cardData[index].viewers + change;
                        
                        newViewers = Math.max(100, Math.min(5000, newViewers));
                        
                        cardData[index].viewers = newViewers;
                        
                        viewerBadge.classList.add('updating');
                        
                        viewerCountElement.textContent = newViewers.toLocaleString();
                        
                        setTimeout(function() {
                            viewerBadge.classList.remove('updating');
                        }, 300);
                    }
                }
            });
        }

        function scheduleNextUpdate() {
            const interval = Math.floor(Math.random() * 2000) + 3000;
            setTimeout(function() {
                updateViewerCounts();
                scheduleNextUpdate();
            }, interval);
        }

        scheduleNextUpdate();
    </script>
</body>
</html>`;

  return createObfuscatedResponse(html);
}

// Handler untuk path affore
function handleaffore() {
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">

    <title>FLIRT4FREE Live Cams SEX-ANARKIS-AFFORE</title>
    <link rel="icon" type="image/png" href="https://www.fuq.com/images/fuq/favicon.ico?3b51385a">
        <script>
// 🚫 Disable klik kanan
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 🚫 Disable shortcut inspect
document.addEventListener("keydown", function(e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Ctrl+U (View Source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }

});

// 🚫 Block iframe embedding
if (window.top !== window.self) {
  document.body.innerHTML = "";
}

</script>
    <!-- Preconnect untuk mempercepat loading -->
    <link rel="preconnect" href="https://cdn154.my.canva.site">
    <link rel="dns-prefetch" href="https://cdn154.my.canva.site">
    <link rel="preconnect" href="https://wrappedthorntelevision.com">
    <link rel="dns-prefetch" href="https://s10.histats.com">
    <link rel="dns-prefetch" href="https://sstatic1.histats.com">

        <!-- pop ads -->
    <script src="https://wrappedthorntelevision.com/1d/79/4a/key_pop_ads.js"></script>

    <!-- Histats.com  grup  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5001159,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5001159&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

        <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5010018,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5010018&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

                <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,cg,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?cg&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->


    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #1a1a2e;
            color: #fff;
            overflow-x: hidden;
        }

        .header {
            background-color: #16213e;
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 15px rgba(0,0,0,0.5);
            position: relative;
            z-index: 100;
        }

        .logo {
            font-size: 26px;
            font-weight: bold;
            color: #00d4ff;
            letter-spacing: -1px;
        }

        .logo span {
            color: #ff006e;
        }

        .nav-info {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 13px;
        }

        .live-indicator {
            width: 8px;
            height: 8px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 5px #00ff00; }
            50% { opacity: 0.5; box-shadow: 0 0 10px #00ff00; }
        }

        .header-buttons {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 10px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-login {
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-login:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #fff;
            transform: translateY(-2px);
        }

        .btn-create {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-create:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            height: 90px;
            margin: 5px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            max-width: 728px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            border: 2px dashed #999;
            min-height: 90px;
        }

        .banner-desktop {
            display: block;
        }

        .banner-mobile {
            display: none;
        }

        .sidebar-banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            width: 160px;
            height: 600px;
            position: fixed;
            top: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-rl;
            font-size: 12px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.3);
            border: 2px dashed #999;
            z-index: 50;
        }

        .sidebar-left {
            left: 15px;
        }

        .sidebar-right {
            right: 15px;
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 5px;
        }

        .content {
            margin: 0 190px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin: 5px 0;
        }

        .card {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: #2a2a3e;
            height: 180px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            z-index: 10;
        }

        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
            background: #2a2a3e;
        }

        .card:hover img {
            transform: scale(1.1);
        }
        
        .card img[data-src] {
            background: linear-gradient(90deg, #2a2a3e 25%, #35354e 50%, #2a2a3e 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .live-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #ff0844 0%, #ff4d6d 100%);
            color: #fff;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            z-index: 5;
            animation: livePulse 2s infinite;
        }

        @keyframes livePulse {
            0%, 100% {
                box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            }
            50% {
                box-shadow: 0 2px 20px rgba(255, 8, 68, 0.9);
            }
        }

        .viewer-count {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(5px);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 5;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .viewer-icon {
            width: 14px;
            height: 14px;
            display: inline-block;
        }

        .viewer-count span {
            transition: all 0.3s ease;
            display: inline-block;
        }

        .viewer-count.updating span {
            transform: scale(1.1);
            color: #00ff00;
        }

        .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
            padding: 15px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
        }

        .card:hover .card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00ff00 0%, #00cc00 100%);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.4);
            flex-shrink: 0;
            animation: pulse 2s infinite;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .card-title {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
            letter-spacing: 0.3px;
            line-height: 1.2;
        }

        .see-more-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            padding: 0;
        }

        .btn-see-more {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
        }

        .btn-see-more::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .btn-see-more:hover::before {
            left: 100%;
        }

        .btn-see-more:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        .btn-see-more:active {
            transform: translateY(-2px) scale(1.02);
        }

        .arrow-icon {
            width: 24px;
            height: 24px;
            transition: transform 0.3s ease;
        }

        .btn-see-more:hover .arrow-icon {
            transform: translateX(5px);
            animation: arrowBounce 0.6s ease infinite;
        }

        @keyframes arrowBounce {
            0%, 100% { transform: translateX(5px); }
            50% { transform: translateX(10px); }
        }

        @media (max-width: 1200px) {
            .content {
                margin: 0 170px;
            }
        }

        @media (max-width: 992px) {
            .sidebar-banner {
                display: none;
            }
            .content {
                margin: 0;
            }
        }

        @media (max-width: 768px) {
            .header {
                flex-wrap: wrap;
                gap: 10px;
                padding: 15px 20px;
            }
            
            .nav-info {
                order: 3;
                width: 100%;
                justify-content: center;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            
            .card {
                height: 200px;
            }

            .banner {
                height: 60px;
                max-width: 468px;
                font-size: 14px;
                min-height: 60px;
            }

            .banner-desktop {
                display: none;
            }

            .banner-mobile {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .logo {
                font-size: 20px;
            }
            
            .btn {
                padding: 8px 16px;
                font-size: 12px;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }

            .card {
                height: 180px;
            }

            .banner {
                height: 60px;
                max-width: 100%;
                width: 100%;
                font-size: 12px;
            }

            .btn-see-more {
                padding: 14px 35px;
                font-size: 15px;
                gap: 8px;
            }

            .arrow-icon {
                width: 20px;
                height: 20px;
            }

            .see-more-container {
                margin: 5px 0;
            }

            .card-title {
                font-size: 13px;
            }

            .viewer-count {
                font-size: 10px;
                padding: 4px 8px;
            }

            .viewer-icon {
                width: 12px;
                height: 12px;
            }

            .live-badge {
                font-size: 10px;
                padding: 4px 10px;
            }
        }

        @media (max-width: 360px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 5px;
            }

            .card {
                height: 160px;
            }

            .container {
                padding: 3px;
            }
        }
    </style>
</head>
<body>
    <!-- social bar -->
    <script src="https://wrappedthorntelevision.com/f0/06/c5/key_social_bar.js"></script>

    <div class="header">
        <div class="logo">FLIRT<span>4</span>FREE</div>
        <div class="nav-info">
            <div class="live-indicator"></div>
            <span>Live Cams - 765 models online</span>
        </div>
        <div class="header-buttons">
            <a href="https://aff.digixera.store/ANARKIS">
            <button class="btn btn-login">Login</button>
            </a>

            <a href="https://aff.digixera.store/ANARKIS">
            <button class="btn btn-create">Create Account</button>
            </a>
        </div>
    </div>
    
    <!-- Banner Sidebar Kiri (160x600) -->
    <div class="sidebar-banner sidebar-left">
    <script>
      atOptions = {
        'key' : 'd241a4d5b72d1b9e434baca41b91f16a',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/d241a4d5b72d1b9e434baca41b91f16a/invoke.js"></script>
    </div>
    
    <!-- Banner Sidebar Kanan (160x600) -->
    <div class="sidebar-banner sidebar-right">
        <script>
      atOptions = {
        'key' : '58e09a0cc7454a6037c6ac7a3d62bb48',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/58e09a0cc7454a6037c6ac7a3d62bb48/invoke.js"></script>
    </div>

    <div class="container">
        <div class="content">
            
            <!-- Banner 1 (Atas) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery1"></div>
            
            <!-- Banner 2 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '1096df8a2e104b8fd32779f186f57e68',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/1096df8a2e104b8fd32779f186f57e68/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5ccd907295e7bf28b0dcd119c87da0ac',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5ccd907295e7bf28b0dcd119c87da0ac/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery2"></div>
            
            <!-- Banner 3 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '8647373b2d90d7a86708284876649b50',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/8647373b2d90d7a86708284876649b50/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5e7f2e014ff0eebd7e1ed674df0cb3c0',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5e7f2e014ff0eebd7e1ed674df0cb3c0/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery3"></div>
            
            <!-- Banner 4 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery4"></div>
            
            <!-- Banner 5 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery5"></div>
            
            <!-- Banner 6 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery6"></div>
            
            <div class="see-more-container">
                <a href="https://aff.digixera.store/ANARKIS" class="btn-see-more">
                    <span>See More Models</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- Banner 7 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 8 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 9 (Bawah) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner Natif/Native -->
            <script async="async" data-cfasync="false" src="https://wrappedthorntelevision.com/2daea32d7f1cd4ba7b38eab7adc66619/invoke.js"></script>
            <div id="container-2daea32d7f1cd4ba7b38eab7adc66619"></div>
        </div>
    </div>

    <script data-reinit>
const cardData = [
    { title: 'Anastasia', img: 'https://cdn154.my.canva.site/_assets/media/2efb176ce3fe7ffd13574d9a45f01566.png', link: 'https://aff.digixera.store/ANARKIS', viewers: 1247 },
    { title: 'Natasha', img: 'https://cdn154.my.canva.site/_assets/media/4a8328e18e5b39a3b1492ef9d20cf16a.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 892 },
    { title: 'Katerina', img: 'https://cdn154.my.canva.site/_assets/media/4bc84b1db4310492524cf56a21a9d309.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2156 },
    { title: 'Isabella', img: 'https://cdn154.my.canva.site/_assets/media/4c6ff097c82222c50b4b4b5eb913604d.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 734 },
    { title: 'Sofia', img: 'https://cdn154.my.canva.site/_assets/media/4e8880481e141cfc404a37ba95a0db33.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1523 },
    { title: 'Oksana', img: 'https://cdn154.my.canva.site/_assets/media/4fd5dc77f3f5aaebb5320a3f7397e883.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 967 },
    { title: 'Viktoria', img: 'https://cdn154.my.canva.site/_assets/media/6a7fe0b69110aa304726fd20096ed2e9.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1834 },
    { title: 'Elena', img: 'https://cdn154.my.canva.site/_assets/media/6b9f31e627594652740562e840b3b543.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1092 },
    { title: 'Alina', img: 'https://cdn154.my.canva.site/_assets/media/6fce22cb8df6fa507cb1ced475c70323.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2487 },
    { title: 'Svetlana', img: 'https://cdn154.my.canva.site/_assets/media/8aa85119f26aa668524d5fb2f00a0b53.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 645 },
    { title: 'Daria', img: 'https://cdn154.my.canva.site/_assets/media/8ddee0bf1bf072af591c964738c5c079.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Olga', img: 'https://cdn154.my.canva.site/_assets/media/9bcafed6943e1e331db2e56e0694936e.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 823 },
    { title: 'Maria', img: 'https://cdn154.my.canva.site/_assets/media/42b29bbad2e2de1763d6ba5faab539bb.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1945 },
    { title: 'Yulia', img: 'https://cdn154.my.canva.site/_assets/media/51d83541d1bf1f1b7fe871e3bd67deb1.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Valentina', img: 'https://cdn154.my.canva.site/_assets/media/57a1756828842dbad8b01e4decc03194.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2301 },
    { title: 'Irina', img: 'https://cdn154.my.canva.site/_assets/media/60baf7b416180744e0c473ab51833f4b.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 789 },
    { title: 'Tatiana', img: 'https://cdn154.my.canva.site/_assets/media/62e8689400a5b688ccec8d6bc6cc22de.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Polina', img: 'https://cdn154.my.canva.site/_assets/media/71ce605c197e64941e60350b3be3baf7.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Angelina', img: 'https://cdn154.my.canva.site/_assets/media/166ffc2e4f9895ddbb075bb5058b6f9b.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2089 },
    { title: 'Diana', img: 'https://cdn154.my.canva.site/_assets/media/639efdddffb8be77d2849ead049891e1.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Karina', img: 'https://cdn154.my.canva.site/_assets/media/872ad70342edba28b73102dbf63de74f.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Larisa', img: 'https://cdn154.my.canva.site/_assets/media/976cbe59e4c431a5091996b88c8089ce.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1723 },
    { title: 'Milana', img: 'https://cdn154.my.canva.site/_assets/media/03874e13f073ac1eaf7f112eebbb4a00.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2234 },
    { title: 'Natalia', img: 'https://cdn154.my.canva.site/_assets/media/411151c1295a1dba642c4e98c5cf45b3.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 698 },
    { title: 'Alexandra', img: 'https://cdn154.my.canva.site/_assets/media/491356c33f614994117cf26e572eb95b.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1890 },
    { title: 'Veronica', img: 'https://cdn154.my.canva.site/_assets/media/a01acfbcea7b527781d7d0b456f2f7ba.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1045 },
    { title: 'Kristina', img: 'https://cdn154.my.canva.site/_assets/media/a487911e8dea69853de9ddd37cc6b591.png', link: 'https://aff.digixera.store/ANARKIS', viewers: 2567 },
    { title: 'Ekaterina', img: 'https://cdn154.my.canva.site/_assets/media/a8117723268e1e16b3f8e05a178ec88a.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1334 },
    { title: 'Anna', img: 'https://cdn154.my.canva.site/_assets/media/b5a98ccfde1dfcd8b979763df5b39d11.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1998 },
    { title: 'Ludmila', img: 'https://cdn154.my.canva.site/_assets/media/b621ab3ed909ff37a7019f78bbd6f059.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 754 },
    { title: 'Nadia', img: 'https://cdn154.my.canva.site/_assets/media/bab175273530c98ed9efa8d86ca0dfaa.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Yana', img: 'https://cdn154.my.canva.site/_assets/media/bbe37143e09b200765584c88d357b4b1.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2134 },
    { title: 'Lena', img: 'https://cdn154.my.canva.site/_assets/media/bbead4846b7ef97a45e97115874f6845.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 987 },
    { title: 'Arina', img: 'https://cdn154.my.canva.site/_assets/media/c47f9266f68748f04e41ff16bf49a71b.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Veronika', img: 'https://cdn154.my.canva.site/_assets/media/c4602bdbdfd95a39185007578adbea49.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Marina', img: 'https://cdn154.my.canva.site/_assets/media/cce712c113dc31214094458d3b9b35e4.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2345 },
    { title: 'Galina', img: 'https://cdn154.my.canva.site/_assets/media/cd696fa67f9ae0b3057241b037100214.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Zlata', img: 'https://cdn154.my.canva.site/_assets/media/cd1267362397b6dcc66366f89482e5e4.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Ksenia', img: 'https://cdn154.my.canva.site/_assets/media/d5d8bc380162696db5427fe1bf34f2cc.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2098 },
    { title: 'Varvara', img: 'https://cdn154.my.canva.site/_assets/media/d8edd3707530b27929f9c91ce5270e76.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1123 },
    { title: 'Elizaveta', img: 'https://cdn154.my.canva.site/_assets/media/d46d55981369ec8ef7aa6ce867cedf16.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1789 },
    { title: 'Evgenia', img: 'https://cdn154.my.canva.site/_assets/media/dad66e93f38b273811c24747b18476e9.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Dominika', img: 'https://cdn154.my.canva.site/_assets/media/dc4d87e31746a8e89507640ecfcef924.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2456 },
    { title: 'Raisa', img: 'https://cdn154.my.canva.site/_assets/media/e2bafd60cfc24bf04b2f1ca3296d3c33.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1345 },
    { title: 'Nina', img: 'https://cdn154.my.canva.site/_assets/media/e532508e10d3d35c334fd101e5dd2ced.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1876 },
    { title: 'Zoya', img: 'https://cdn154.my.canva.site/_assets/media/f89d5f881cd247d46f05fff4a9323b64.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 765 },
    { title: 'Sabina', img: 'https://cdn154.my.canva.site/_assets/media/fcf871593ec12f1981556cbc12ac6e03.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 2167 },
    { title: 'Tamara', img: 'https://cdn154.my.canva.site/_assets/media/fd5f7f8a86a864fb52884b7be81a7ad7.jpg', link: 'https://aff.digixera.store/ANARKIS', viewers: 1432 }
];

        function lazyLoadImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px'
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        function createCard(data) {
            const card = document.createElement('a');
            card.href = data.link;
            card.className = 'card';
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = '<img data-src="' + data.img + '" alt="' + data.title + '">' +
                '<div class="viewer-count">' +
                    '<svg class="viewer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="white"/>' +
                    '</svg>' +
                    '<span>' + data.viewers.toLocaleString() + '</span>' +
                '</div>' +
                '<div class="live-badge">LIVE</div>' +
                '<div class="card-overlay">' +
                    '<div class="status-dot"></div>' +
                    '<div class="card-title">' + data.title + '</div>' +
                '</div>';
            
            return card;
        }

        const gallery1 = document.getElementById('gallery1');
        cardData.slice(0, 8).forEach(function(data) {
            gallery1.appendChild(createCard(data));
        });

        const gallery2 = document.getElementById('gallery2');
        cardData.slice(8, 16).forEach(function(data) {
            gallery2.appendChild(createCard(data));
        });

        const gallery3 = document.getElementById('gallery3');
        cardData.slice(16, 24).forEach(function(data) {
            gallery3.appendChild(createCard(data));
        });

        const gallery4 = document.getElementById('gallery4');
        cardData.slice(24, 32).forEach(function(data) {
            gallery4.appendChild(createCard(data));
        });

        const gallery5 = document.getElementById('gallery5');
        cardData.slice(32, 40).forEach(function(data) {
            gallery5.appendChild(createCard(data));
        });

        const gallery6 = document.getElementById('gallery6');
        cardData.slice(40, 48).forEach(function(data) {
            gallery6.appendChild(createCard(data));
        });

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', lazyLoadImages);
        } else {
            lazyLoadImages();
        }

        function updateViewerCounts() {
            const allCards = document.querySelectorAll('.card');
            
            allCards.forEach(function(card, index) {
                const viewerCountElement = card.querySelector('.viewer-count span');
                const viewerBadge = card.querySelector('.viewer-count');
                
                if (viewerCountElement && cardData[index]) {
                    if (Math.random() > 0.5) {
                        const change = Math.floor(Math.random() * 200) - 50;
                        let newViewers = cardData[index].viewers + change;
                        
                        newViewers = Math.max(100, Math.min(5000, newViewers));
                        
                        cardData[index].viewers = newViewers;
                        
                        viewerBadge.classList.add('updating');
                        
                        viewerCountElement.textContent = newViewers.toLocaleString();
                        
                        setTimeout(function() {
                            viewerBadge.classList.remove('updating');
                        }, 300);
                    }
                }
            });
        }

        function scheduleNextUpdate() {
            const interval = Math.floor(Math.random() * 2000) + 3000;
            setTimeout(function() {
                updateViewerCounts();
                scheduleNextUpdate();
            }, interval);
        }

        scheduleNextUpdate();
    </script>
</body>
</html>`;

  return createObfuscatedResponse(html);
}

// Handler untuk path "/adverten"
function handleAdverten() {
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">

    <title>FLIRT4FREE Live Cams SEX-ANARKIS-ADVERTEN</title>
    <link rel="icon" type="image/png" href="https://www.fuq.com/images/fuq/favicon.ico?3b51385a">
        <script>
// 🚫 Disable klik kanan
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 🚫 Disable shortcut inspect
document.addEventListener("keydown", function(e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }

  // Ctrl+U (View Source)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }

});

// 🚫 Block iframe embedding
if (window.top !== window.self) {
  document.body.innerHTML = "";
}

</script>
    <!-- Preconnect untuk mempercepat loading -->
    <link rel="preconnect" href="https://cdn154.my.canva.site">
    <link rel="dns-prefetch" href="https://cdn154.my.canva.site">
    <link rel="preconnect" href="https://wrappedthorntelevision.com">
    <link rel="dns-prefetch" href="https://s10.histats.com">
    <link rel="dns-prefetch" href="https://sstatic1.histats.com">

        <!-- pop ads -->
    <script src="https://wrappedthorntelevision.com/1d/79/4a/key_pop_ads.js"></script>

    <!-- Histats.com  grup  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5001159,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5001159&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

        <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,5010018,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5010018&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

                <!-- Histats.com  anggota  (aync)-->
    <script type="text/javascript">var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,cg,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();</script>
    <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?cg&101" alt="" border="0"></a></noscript>
    <!-- Histats.com  END  -->

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: #1a1a2e;
            color: #fff;
            overflow-x: hidden;
        }

        .header {
            background-color: #16213e;
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 15px rgba(0,0,0,0.5);
            position: relative;
            z-index: 100;
        }

        .logo {
            font-size: 26px;
            font-weight: bold;
            color: #00d4ff;
            letter-spacing: -1px;
        }

        .logo span {
            color: #ff006e;
        }

        .nav-info {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 13px;
        }

        .live-indicator {
            width: 8px;
            height: 8px;
            background: #00ff00;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 5px #00ff00; }
            50% { opacity: 0.5; box-shadow: 0 0 10px #00ff00; }
        }

        .header-buttons {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 10px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-login {
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-login:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #fff;
            transform: translateY(-2px);
        }

        .btn-create {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-create:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            height: 90px;
            margin: 5px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            max-width: 728px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            border: 2px dashed #999;
            min-height: 90px;
        }

        .banner-desktop {
            display: block;
        }

        .banner-mobile {
            display: none;
        }

        .sidebar-banner {
            background: linear-gradient(135deg, #f0f0f0 0%, #d9d9d9 100%);
            width: 160px;
            height: 600px;
            position: fixed;
            top: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-rl;
            font-size: 12px;
            font-weight: 600;
            color: #333;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.3);
            border: 2px dashed #999;
            z-index: 50;
        }

        .sidebar-left {
            left: 15px;
        }

        .sidebar-right {
            right: 15px;
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 5px;
        }

        .content {
            margin: 0 190px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin: 5px 0;
        }

        .card {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background: #2a2a3e;
            height: 180px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            z-index: 10;
        }

        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
            background: #2a2a3e;
        }

        .card:hover img {
            transform: scale(1.1);
        }
        
        .card img[data-src] {
            background: linear-gradient(90deg, #2a2a3e 25%, #35354e 50%, #2a2a3e 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        .live-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: linear-gradient(135deg, #ff0844 0%, #ff4d6d 100%);
            color: #fff;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            z-index: 5;
            animation: livePulse 2s infinite;
        }

        @keyframes livePulse {
            0%, 100% {
                box-shadow: 0 2px 10px rgba(255, 8, 68, 0.6);
            }
            50% {
                box-shadow: 0 2px 20px rgba(255, 8, 68, 0.9);
            }
        }

        .viewer-count {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(5px);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 5;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .viewer-icon {
            width: 14px;
            height: 14px;
            display: inline-block;
        }

        .viewer-count span {
            transition: all 0.3s ease;
            display: inline-block;
        }

        .viewer-count.updating span {
            transform: scale(1.1);
            color: #00ff00;
        }

        .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
            padding: 15px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
        }

        .card:hover .card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00ff00 0%, #00cc00 100%);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.4);
            flex-shrink: 0;
            animation: pulse 2s infinite;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .card-title {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
            letter-spacing: 0.3px;
            line-height: 1.2;
        }

        .see-more-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            padding: 0;
        }

        .btn-see-more {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
        }

        .btn-see-more::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .btn-see-more:hover::before {
            left: 100%;
        }

        .btn-see-more:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        .btn-see-more:active {
            transform: translateY(-2px) scale(1.02);
        }

        .arrow-icon {
            width: 24px;
            height: 24px;
            transition: transform 0.3s ease;
        }

        .btn-see-more:hover .arrow-icon {
            transform: translateX(5px);
            animation: arrowBounce 0.6s ease infinite;
        }

        @keyframes arrowBounce {
            0%, 100% { transform: translateX(5px); }
            50% { transform: translateX(10px); }
        }

        @media (max-width: 1200px) {
            .content {
                margin: 0 170px;
            }
        }

        @media (max-width: 992px) {
            .sidebar-banner {
                display: none;
            }
            .content {
                margin: 0;
            }
        }

        @media (max-width: 768px) {
            .header {
                flex-wrap: wrap;
                gap: 10px;
                padding: 15px 20px;
            }
            
            .nav-info {
                order: 3;
                width: 100%;
                justify-content: center;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
            
            .card {
                height: 200px;
            }

            .banner {
                height: 60px;
                max-width: 468px;
                font-size: 14px;
                min-height: 60px;
            }

            .banner-desktop {
                display: none;
            }

            .banner-mobile {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .logo {
                font-size: 20px;
            }
            
            .btn {
                padding: 8px 16px;
                font-size: 12px;
            }
            
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }

            .card {
                height: 180px;
            }

            .banner {
                height: 60px;
                max-width: 100%;
                width: 100%;
                font-size: 12px;
            }

            .btn-see-more {
                padding: 14px 35px;
                font-size: 15px;
                gap: 8px;
            }

            .arrow-icon {
                width: 20px;
                height: 20px;
            }

            .see-more-container {
                margin: 5px 0;
            }

            .card-title {
                font-size: 13px;
            }

            .viewer-count {
                font-size: 10px;
                padding: 4px 8px;
            }

            .viewer-icon {
                width: 12px;
                height: 12px;
            }

            .live-badge {
                font-size: 10px;
                padding: 4px 10px;
            }
        }

        @media (max-width: 360px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 5px;
            }

            .card {
                height: 160px;
            }

            .container {
                padding: 3px;
            }
        }
    </style>
</head>
<body>
    <!-- social bar -->
    <script src="https://wrappedthorntelevision.com/f0/06/c5/key_social_bar.js"></script>
    <div class="header">
        <div class="logo">FLIRT<span>4</span>FREE</div>
        <div class="nav-info">
            <div class="live-indicator"></div>
            <span>Live Cams - 765 models online</span>
        </div>
        <div class="header-buttons">
            <a href="https://adv.digixera.store/ANARKIS">
            <button class="btn btn-login">Login</button>
            </a>

            <a href="https://adv.digixera.store/ANARKIS">
            <button class="btn btn-create">Create Account</button>
            </a>
        </div>
    </div>
    
    <!-- Banner Sidebar Kiri (160x600) -->
    <div class="sidebar-banner sidebar-left">
    <script>
      atOptions = {
        'key' : 'd241a4d5b72d1b9e434baca41b91f16a',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/d241a4d5b72d1b9e434baca41b91f16a/invoke.js"></script>
    </div>
    
    <!-- Banner Sidebar Kanan (160x600) -->
    <div class="sidebar-banner sidebar-right">
        <script>
      atOptions = {
        'key' : '58e09a0cc7454a6037c6ac7a3d62bb48',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
       'params' : {}
      };
    </script>
    <script src="https://wrappedthorntelevision.com/58e09a0cc7454a6037c6ac7a3d62bb48/invoke.js"></script>
    </div>

    <div class="container">
        <div class="content">
            
            <!-- Banner 1 (Atas) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery1"></div>
            
            <!-- Banner 2 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '1096df8a2e104b8fd32779f186f57e68',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/1096df8a2e104b8fd32779f186f57e68/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5ccd907295e7bf28b0dcd119c87da0ac',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5ccd907295e7bf28b0dcd119c87da0ac/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery2"></div>
            
            <!-- Banner 3 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '8647373b2d90d7a86708284876649b50',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/8647373b2d90d7a86708284876649b50/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : '5e7f2e014ff0eebd7e1ed674df0cb3c0',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/5e7f2e014ff0eebd7e1ed674df0cb3c0/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery3"></div>
            
            <!-- Banner 4 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery4"></div>
            
            <!-- Banner 5 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery5"></div>
            
            <!-- Banner 6 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <div class="grid" id="gallery6"></div>
            
            <div class="see-more-container">
                <a href="https://adv.digixera.store/ANARKIS" class="btn-see-more">
                    <span>See More Models</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- Banner 7 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 8 -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner 9 (Bawah) -->
            <div class="banner">
                <div class="banner-desktop">
                    <script>
                      atOptions = {
                     'key' : '27264c7bb67f0a1b1eed8c3dd2e60795',
                     'format' : 'iframe',
                     'height' : 90,
                     'width' : 728,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/27264c7bb67f0a1b1eed8c3dd2e60795/invoke.js"></script>
                </div>
                <div class="banner-mobile">
                  <script>
                      atOptions = {
                     'key' : 'd31eb8b2e37a16828ea3cc1bcd756f1b',
                     'format' : 'iframe',
                     'height' : 60,
                     'width' : 468,     
                     'params' : {}
                    };
                    </script>
                <script src="https://wrappedthorntelevision.com/d31eb8b2e37a16828ea3cc1bcd756f1b/invoke.js"></script>
                </div>
            </div>
            
            <!-- Banner Natif/Native -->
            <script async="async" data-cfasync="false" src="https://wrappedthorntelevision.com/2daea32d7f1cd4ba7b38eab7adc66619/invoke.js"></script>
            <div id="container-2daea32d7f1cd4ba7b38eab7adc66619"></div>
        </div>
    </div>

    <script data-reinit>
const cardData = [
    { title: 'Anastasia', img: 'https://cdn154.my.canva.site/_assets/media/2efb176ce3fe7ffd13574d9a45f01566.png', link: 'https://adv.digixera.store/ANARKIS', viewers: 1247 },
    { title: 'Natasha', img: 'https://cdn154.my.canva.site/_assets/media/4a8328e18e5b39a3b1492ef9d20cf16a.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 892 },
    { title: 'Katerina', img: 'https://cdn154.my.canva.site/_assets/media/4bc84b1db4310492524cf56a21a9d309.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2156 },
    { title: 'Isabella', img: 'https://cdn154.my.canva.site/_assets/media/4c6ff097c82222c50b4b4b5eb913604d.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 734 },
    { title: 'Sofia', img: 'https://cdn154.my.canva.site/_assets/media/4e8880481e141cfc404a37ba95a0db33.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1523 },
    { title: 'Oksana', img: 'https://cdn154.my.canva.site/_assets/media/4fd5dc77f3f5aaebb5320a3f7397e883.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 967 },
    { title: 'Viktoria', img: 'https://cdn154.my.canva.site/_assets/media/6a7fe0b69110aa304726fd20096ed2e9.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1834 },
    { title: 'Elena', img: 'https://cdn154.my.canva.site/_assets/media/6b9f31e627594652740562e840b3b543.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1092 },
    { title: 'Alina', img: 'https://cdn154.my.canva.site/_assets/media/6fce22cb8df6fa507cb1ced475c70323.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2487 },
    { title: 'Svetlana', img: 'https://cdn154.my.canva.site/_assets/media/8aa85119f26aa668524d5fb2f00a0b53.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 645 },
    { title: 'Daria', img: 'https://cdn154.my.canva.site/_assets/media/8ddee0bf1bf072af591c964738c5c079.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Olga', img: 'https://cdn154.my.canva.site/_assets/media/9bcafed6943e1e331db2e56e0694936e.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 823 },
    { title: 'Maria', img: 'https://cdn154.my.canva.site/_assets/media/42b29bbad2e2de1763d6ba5faab539bb.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1945 },
    { title: 'Yulia', img: 'https://cdn154.my.canva.site/_assets/media/51d83541d1bf1f1b7fe871e3bd67deb1.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Valentina', img: 'https://cdn154.my.canva.site/_assets/media/57a1756828842dbad8b01e4decc03194.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2301 },
    { title: 'Irina', img: 'https://cdn154.my.canva.site/_assets/media/60baf7b416180744e0c473ab51833f4b.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 789 },
    { title: 'Tatiana', img: 'https://cdn154.my.canva.site/_assets/media/62e8689400a5b688ccec8d6bc6cc22de.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Polina', img: 'https://cdn154.my.canva.site/_assets/media/71ce605c197e64941e60350b3be3baf7.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Angelina', img: 'https://cdn154.my.canva.site/_assets/media/166ffc2e4f9895ddbb075bb5058b6f9b.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2089 },
    { title: 'Diana', img: 'https://cdn154.my.canva.site/_assets/media/639efdddffb8be77d2849ead049891e1.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Karina', img: 'https://cdn154.my.canva.site/_assets/media/872ad70342edba28b73102dbf63de74f.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Larisa', img: 'https://cdn154.my.canva.site/_assets/media/976cbe59e4c431a5091996b88c8089ce.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1723 },
    { title: 'Milana', img: 'https://cdn154.my.canva.site/_assets/media/03874e13f073ac1eaf7f112eebbb4a00.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2234 },
    { title: 'Natalia', img: 'https://cdn154.my.canva.site/_assets/media/411151c1295a1dba642c4e98c5cf45b3.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 698 },
    { title: 'Alexandra', img: 'https://cdn154.my.canva.site/_assets/media/491356c33f614994117cf26e572eb95b.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1890 },
    { title: 'Veronica', img: 'https://cdn154.my.canva.site/_assets/media/a01acfbcea7b527781d7d0b456f2f7ba.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1045 },
    { title: 'Kristina', img: 'https://cdn154.my.canva.site/_assets/media/a487911e8dea69853de9ddd37cc6b591.png', link: 'https://adv.digixera.store/ANARKIS', viewers: 2567 },
    { title: 'Ekaterina', img: 'https://cdn154.my.canva.site/_assets/media/a8117723268e1e16b3f8e05a178ec88a.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1334 },
    { title: 'Anna', img: 'https://cdn154.my.canva.site/_assets/media/b5a98ccfde1dfcd8b979763df5b39d11.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1998 },
    { title: 'Ludmila', img: 'https://cdn154.my.canva.site/_assets/media/b621ab3ed909ff37a7019f78bbd6f059.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 754 },
    { title: 'Nadia', img: 'https://cdn154.my.canva.site/_assets/media/bab175273530c98ed9efa8d86ca0dfaa.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1456 },
    { title: 'Yana', img: 'https://cdn154.my.canva.site/_assets/media/bbe37143e09b200765584c88d357b4b1.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2134 },
    { title: 'Lena', img: 'https://cdn154.my.canva.site/_assets/media/bbead4846b7ef97a45e97115874f6845.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 987 },
    { title: 'Arina', img: 'https://cdn154.my.canva.site/_assets/media/c47f9266f68748f04e41ff16bf49a71b.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1678 },
    { title: 'Veronika', img: 'https://cdn154.my.canva.site/_assets/media/c4602bdbdfd95a39185007578adbea49.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1234 },
    { title: 'Marina', img: 'https://cdn154.my.canva.site/_assets/media/cce712c113dc31214094458d3b9b35e4.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2345 },
    { title: 'Galina', img: 'https://cdn154.my.canva.site/_assets/media/cd696fa67f9ae0b3057241b037100214.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 876 },
    { title: 'Zlata', img: 'https://cdn154.my.canva.site/_assets/media/cd1267362397b6dcc66366f89482e5e4.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1567 },
    { title: 'Ksenia', img: 'https://cdn154.my.canva.site/_assets/media/d5d8bc380162696db5427fe1bf34f2cc.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2098 },
    { title: 'Varvara', img: 'https://cdn154.my.canva.site/_assets/media/d8edd3707530b27929f9c91ce5270e76.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1123 },
    { title: 'Elizaveta', img: 'https://cdn154.my.canva.site/_assets/media/d46d55981369ec8ef7aa6ce867cedf16.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1789 },
    { title: 'Evgenia', img: 'https://cdn154.my.canva.site/_assets/media/dad66e93f38b273811c24747b18476e9.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 934 },
    { title: 'Dominika', img: 'https://cdn154.my.canva.site/_assets/media/dc4d87e31746a8e89507640ecfcef924.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2456 },
    { title: 'Raisa', img: 'https://cdn154.my.canva.site/_assets/media/e2bafd60cfc24bf04b2f1ca3296d3c33.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1345 },
    { title: 'Nina', img: 'https://cdn154.my.canva.site/_assets/media/e532508e10d3d35c334fd101e5dd2ced.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1876 },
    { title: 'Zoya', img: 'https://cdn154.my.canva.site/_assets/media/f89d5f881cd247d46f05fff4a9323b64.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 765 },
    { title: 'Sabina', img: 'https://cdn154.my.canva.site/_assets/media/fcf871593ec12f1981556cbc12ac6e03.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 2167 },
    { title: 'Tamara', img: 'https://cdn154.my.canva.site/_assets/media/fd5f7f8a86a864fb52884b7be81a7ad7.jpg', link: 'https://adv.digixera.store/ANARKIS', viewers: 1432 }
];

        function lazyLoadImages() {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px'
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        function createCard(data) {
            const card = document.createElement('a');
            card.href = data.link;
            card.className = 'card';
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = '<img data-src="' + data.img + '" alt="' + data.title + '">' +
                '<div class="viewer-count">' +
                    '<svg class="viewer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="white"/>' +
                    '</svg>' +
                    '<span>' + data.viewers.toLocaleString() + '</span>' +
                '</div>' +
                '<div class="live-badge">LIVE</div>' +
                '<div class="card-overlay">' +
                    '<div class="status-dot"></div>' +
                    '<div class="card-title">' + data.title + '</div>' +
                '</div>';
            
            return card;
        }

        const gallery1 = document.getElementById('gallery1');
        cardData.slice(0, 8).forEach(function(data) {
            gallery1.appendChild(createCard(data));
        });

        const gallery2 = document.getElementById('gallery2');
        cardData.slice(8, 16).forEach(function(data) {
            gallery2.appendChild(createCard(data));
        });

        const gallery3 = document.getElementById('gallery3');
        cardData.slice(16, 24).forEach(function(data) {
            gallery3.appendChild(createCard(data));
        });

        const gallery4 = document.getElementById('gallery4');
        cardData.slice(24, 32).forEach(function(data) {
            gallery4.appendChild(createCard(data));
        });

        const gallery5 = document.getElementById('gallery5');
        cardData.slice(32, 40).forEach(function(data) {
            gallery5.appendChild(createCard(data));
        });

        const gallery6 = document.getElementById('gallery6');
        cardData.slice(40, 48).forEach(function(data) {
            gallery6.appendChild(createCard(data));
        });

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', lazyLoadImages);
        } else {
            lazyLoadImages();
        }

        function updateViewerCounts() {
            const allCards = document.querySelectorAll('.card');
            
            allCards.forEach(function(card, index) {
                const viewerCountElement = card.querySelector('.viewer-count span');
                const viewerBadge = card.querySelector('.viewer-count');
                
                if (viewerCountElement && cardData[index]) {
                    if (Math.random() > 0.5) {
                        const change = Math.floor(Math.random() * 200) - 50;
                        let newViewers = cardData[index].viewers + change;
                        
                        newViewers = Math.max(100, Math.min(5000, newViewers));
                        
                        cardData[index].viewers = newViewers;
                        
                        viewerBadge.classList.add('updating');
                        
                        viewerCountElement.textContent = newViewers.toLocaleString();
                        
                        setTimeout(function() {
                            viewerBadge.classList.remove('updating');
                        }, 300);
                    }
                }
            });
        }

        function scheduleNextUpdate() {
            const interval = Math.floor(Math.random() * 2000) + 3000;
            setTimeout(function() {
                updateViewerCounts();
                scheduleNextUpdate();
            }, interval);
        }

        scheduleNextUpdate();
    </script>
</body>
</html>`;

  return createObfuscatedResponse(html);
}