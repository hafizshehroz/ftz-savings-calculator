



            String.prototype.removeComma = function () {
                var index = this.indexOf(',');

                if (index !== -1) {
                    return this.replace(/,/g, '');
                } else {
                    return this;
                }
            };

            document.querySelectorAll('.calc-input').forEach(function(elem){
                elem.addEventListener('input', function(e){
                    if(e.target.nodeName != 'SELECT'){
                        var val = this.value.replace(/,/g, '')
                        this.value = addCommas(val.replace(/[^0-9.e\,]/, ''));
                    }
                })
                elem.dispatchEvent(new Event('input'))
            });
	
        // document.querySelectorAll('.calc-input').forEach((element,index)=>{
        //     // console.log(element)
        //     element.addEventListener('input', calculate);
        // })
        
        document.querySelector('#calculate').addEventListener('click', calculate);
        document.querySelector('#calculate').dispatchEvent(new Event("click"))
        
		
		// document.querySelectorAll('.calc-input').forEach(function(element){
		// 	element.oninput = function(e){
		// 		// calculate();
		// 	}
		// 	element.dispatchEvent(new Event("input"))
		// })


		function e(selector){
            return document.querySelector(selector);
        }

		function calculate(){
            console.log(123)
			let feu = +e('#feu').value.removeComma(),
			nas = +e('#nas').value.removeComma(),
			ivc = +e('#ivc').value.removeComma(),
			ivas = +e('#ivas').value.removeComma(),
			cefa = +e('#cefa').value.removeComma(),
			avi = +e('#avi').value.removeComma(),
			drim = +e('#drim').value.removeComma(),
			abfpe = +e('#abfpe').value.removeComma(),
			nait = +e('#nait').value.removeComma(),
            
			pre = +e('#pre').value.removeComma(),
			psim = +e('#psim').value.removeComma(),
			ir = +e('#ir').value.removeComma(),
            
			// mpf = +e('#mpf').value.removeComma(),
			// afi = +e('#afi').value.removeComma(),
            adp = avi*(drim/100),
            actualMPF = avi*0.003464,
            annualMPF = 634.62*cefa,
            maxMPF = 634.62,
            WeeksIn = 52,
            FTZentry = 500,
            ampf = Math.min(actualMPF,annualMPF),
            afi  = avi/nait,
            ddfy = afi*(drim/100),
            ccfy = (ddfy/100)*ir,
            reExports = adp*(pre/100),
            scrap = adp*(psim/100),
            eafwe = maxMPF*WeeksIn,
            mpfSavingOppor = ampf-eafwe,
            acbe = cefa*abfpe,
            eabewe = WeeksIn*FTZentry,
            beso = acbe-eabewe,
            tewes = beso+mpfSavingOppor,
            fys = ddfy+scrap+tewes+reExports,
            spy = ccfy+scrap+tewes+reExports;
            // console.log(adp, actualMPF, annualMPF, ampf ,afi,ddfy ,ccfy ,reExports ,scrap)
            console.log(eafwe, mpfSavingOppor, acbe, eabewe ,beso,tewes ,fys ,spy )
            ;
			// console.log(combinedIncome,downPayment,ccPayments,mortgageRate,mortgageTerm,propertyTaxes,hazardInsurance),
			
			
			e('#adp').innerText = ('$'+addCommas(adp.toFixed(2)));
			e('#ampf').innerText = ('$'+addCommas(ampf.toFixed(2)));
			e('#afi').innerText = ('$'+addCommas(afi.toFixed(2)));

			e('#ddfy').innerText = ('$'+addCommas(ddfy.toFixed(2)));
			e('#ccfy').innerText = ('$'+addCommas(ccfy.toFixed(2)));
			e('#ccfy_').innerText = ('$'+addCommas(ccfy.toFixed(2)));

			e('#reExports').innerText = ('$'+addCommas(reExports.toFixed(2)));
			e('#scrap').innerText = ('$'+addCommas(scrap.toFixed(2)));
			e('#scrap_').innerText = ('$'+addCommas(scrap.toFixed(2)));

			e('#eafwe').innerText = ('$'+addCommas(eafwe.toFixed(2)));
			e('#mpfSavingOppor').innerText = ('$'+addCommas(mpfSavingOppor.toFixed(2)));
			e('#acbe').innerText = ('$'+addCommas(acbe.toFixed(2)));
			e('#eabewe').innerText = ('$'+addCommas(eabewe.toFixed(2)));
			e('#beso').innerText = ('$'+addCommas(beso.toFixed(2)));
			e('#tewes').innerText = ('$'+addCommas(tewes.toFixed(2)));
			e('#tewes_').innerText = ('$'+addCommas(tewes.toFixed(2)));

			e('#fys').innerText = ('$'+addCommas(fys.toFixed(2)));
			e('#spy').innerText = ('$'+addCommas(spy.toFixed(2)));

			e('#spy_').innerText = ('$'+addCommas(spy.toFixed(2)));

            




            
            var formData = `f1=${feu}&f2=${nas}&f3=${ivc}&f4=${ivas}&f5=${cefa}&f6=${avi}&f7=${adp}`;
            
            fetch('https://script.google.com/macros/s/AKfycbxSgsti5ckeobSwu_lX2pge8w-iS479Rm3vShxV4IR2IKW9pskEUYsb1h_68fJyPMu3PQ/exec',{
                method: 'POST',
                body: new URLSearchParams(formData),
                // cache: 'default'
            }).then(function(res){
                // console.log(res)
                return res.json();
            }).then(function(data){
                console.log(data)
                
            })
            .catch(function(error){
                console.log(error)
            })

			
		};
		


	function addCommas(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
	}
	




   
