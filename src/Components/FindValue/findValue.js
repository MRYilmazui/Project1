export default function findValue(param, pageName, pathname) {
    const name = pageName;

    if(pageName === 'Kampanya' || pageName === 'Campaign'){
      
      if(pathname === 'Kamyon' || pathname === 'Truck'){
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