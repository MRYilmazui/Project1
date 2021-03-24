export default function findValue(param, pageName, pathname, url) {
    const name = pageName;
    if(url === "/Urunlerimiz/Otobus/Satis" || url === "/Our-Products/Bus/Sales"){
      return "bus_sales";
    } else if (url === "/Urunlerimiz/Otobus/Satis/Danismanlik-ve-Iletisim" || url === "/Our-Products/Bus/Consulting-and-Communication"){
      return "bus_consultingandcommunication";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis/Bus-Store" || url === "/Our-Products/Bus/Sales/Bus-Store"){
      return "bus_busstore";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis/Brosurler-ve-Indirilebilir-Ogeler" || url === "/Our-Products/Bus/Sales/Brochures-and-Downloads"){
      return "bus_brochuresanddownloads";
      
    } else if (url === "/FiyatListesi/Otobus/Satis/Fiyat-Listesi" || url === "/Price-List/Bus/Sales/Price-List"){
      return "bus_pricelist";
      
    } else if (url === "/Urunlerimiz/Otobus/Bayiler-ve-Yetkili-Servisler" || url === "/Our-Products/Bus/Dealers-and-Authorized-Services"){
      return "bus_dealersandauthorizedservices";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler" || url === "/Our-Products/Bus/After-Sales-Services"){
      return "bus_aftersalesservices";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Hizmetler" || url === "/Our-Products/Bus/After-Sales-Services/Services"){
      return "bus_services";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Garanti" || url === "/Our-Products/Bus/After-Sales-Services/Warranty"){
      return "bus_warranty";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Sigorta" || url === "/Our-Products/Bus/After-Sales-Services/Insurance"){
      return "bus_insurance";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/MB-Kasko" || url === "/Our-Products/Bus/After-Sales-Services/MB-Insurance"){
      return "bus_mb_insurance";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Yedek-Parca-ve-Aksesuar" || url === "/Our-Products/Bus/After-Sales-Services/Spare-Parts-and-Accessories"){
      return "bus_sparepartsandaccessories";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Gonullu-Geri-Cagirma-Aksiyonlari" || url === "/Our-Products/Bus/After-Sales-Services/Voluntary-Recall-Actions"){
      return "bus_voluntaryrecallactions";
      
    } else if (url === "/Urunlerimiz/Otobus/Satis-Sonrasi-Hizmetler/Servisler-icin-Bilgiler" || url === "/Our-Products/Bus/After-Sales-Services/Information-for-Services"){
      return "bus_informationforservices";
    }

    if(pageName === 'Kampanya' || pageName === 'Campaign'){
      
      if(pathname === 'Kamyon' || pathname === 'Truck'){
        return param[2].sub[0].sub[1].value
      } else {
        return param[2].sub[1].sub[1].value
      }
    }
    if(pageName === 'Kampanya' || pageName === 'Campaign'){
      
      if(pathname === 'Otobüs' || pathname === 'Bus'){
        return param[2].sub[0].sub[1].value
      } else {
        return param[2].sub[1].sub[1].value
      }
    }
    if(pathname !== undefined) {

        if(param[2].sub[0].name === pageName){
            for (let q = 0; q < param[2].sub[0].sub[1].sub.length; q++) {
                const link = param[2].sub[0].sub[1].sub[q].link.split('/');
                const linkLength = link.length-1;
                const otherLink = pathname.split('/');
                const otherLinkLength = otherLink.length-1;
        
                if(link[linkLength] === otherLink[otherLinkLength]){
                    return param[2].sub[0].sub[1].sub[q].value

                    break;
                }
            }
        } else {
            for (let q = 0; q < param[2].sub[1].sub[1].sub.length; q++) {
                const link = param[2].sub[1].sub[1].sub[q].link.split('/');
                const linkLength = link.length-1;
                const otherLink = pathname.split('/');
                const otherLinkLength = otherLink.length-1;
        
                if(link[linkLength] === otherLink[otherLinkLength]){
                    return param[2].sub[1].sub[1].sub[q].value

                    break;
                }
            }
        }
    }
    
    for (let i = 0; i < param.length-1; i++) {
      
      if(param[i].sub !== null) {
        const link = param[i].link.split('/');
        const linkLength = link.length-1;

        if(link[linkLength] === name){
          return param[i].value

          break;
        }

        for (let k = 0; k < param[i].sub.length; k++) {
      
          if(param[i].sub[k].sub !== null) {
            const link = param[i].sub[k].link.split('/');
            const linkLength = link.length-1;
    
            if(link[linkLength] === name){
              return param[i].sub[k].value
    
              break;
            }

            for (let p = 0; p < param[i].sub[k].sub.length; p++) {
      
              if(param[i].sub[k].sub[p].sub !== null) {
                const link = param[i].sub[k].sub[p].link.split('/');
                const linkLength = link.length-1;

                if(link[linkLength] === name){
                  return param[i].sub[k].sub[p].value

                  break;
                }

                for (let t = 0; t < param[i].sub[k].sub[p].sub.length; t++) {
      
                  const link = param[i].sub[k].sub[p].sub[t].link.split('/');
                  const linkLength = link.length-1;
          
                  if(link[linkLength] === name){
                    return param[i].sub[k].sub[p].sub[t].value
          
                    break;
                  }
                }
                
              } else {
                const link = param[i].sub[k].sub[p].link.split('/');
                const linkLength = link.length-1;
        
                if(link[linkLength] === name){
                  return param[i].sub[k].sub[p].value
        
                  break;
                }
              }
            }
            
            
          } else {
            const link = param[i].sub[k].link.split('/');
            const linkLength = link.length-1;
    
            if(link[linkLength] === name){
              return param[i].sub[k].value
    
              break;
            }
          }
        }
        
      } else {
        const link = param[i].link.split('/');
        const linkLength = link.length-1;

        if(link[linkLength] === name){
          return param[i].value

          break;
        }
      }
    }

  }