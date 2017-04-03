//  Attendre le chargement du DOM
$(document).ready(function(){
    // console.log('Dom chargé'); => Test pour vérifier que la page foonctionne

        // Créer un tableau pour enregistrer les avatars :

        var myTown=[];
    
        //  Vérifier le genre de l'avatar :
            var avatarWoman=$('#avatarWoman');
            var avatarMan=$('#avatarMan');
            var avatarGender;

            // => avatarWoman Capter le click :
            avatarWoman.click(function(){
                console.log('Je suis une '+avatarWoman.val());

                // Désactiver Woman :
               avatarMan.prop('checked', false);

                // Modifier la valeur de avatarGender:
                avatarGender= avatarWoman.val(); 

                // VIder le message d'erreur :
                $('.labelGender b').text('');

                // Modifier l'attribut src de #avatarBody:
                $('#avatarBody').attr('src','img/' +avatarGender+'.png');
            });
            
             // => avatarMan Capter le click :
            avatarMan.click(function(){
                console.log('Je suis un '+avatarMan.val());

                // Désactiver Woman :
               avatarWoman.prop('checked', false);

               // Modifier la valeur de avatarGender:
                avatarGender= avatarMan.val();

                // VIder le message d'erreur :
                $('.labelGender b').text('');

                // Modifier l'attribut src de #avatarBody:
                $('#avatarBody').attr('src','img/' +avatarGender+'.png');
            });

        // Supprimer les messages d'erreur:
        $('input,select').focus(function(){
            // Seclectionner la balise précvédent le input :
            $(this).prev().children('b').text('');

        });


        // Capter l'évènement change() sur les selects :
        $('select').change(function(){
            console.log($(this ).attr('id')+ 'change: '+$(this).val() );
            
            // Condition if pour modifier la valeur src de avatarStyleTop ou avatarStyleBottom :
            if($(this ).attr('id')== 'avatarStyleTop'){
                
                // console.log('Modification du style Top');
                // Modifier la valeur de l'attribut src de avatarTOP : 
                $('#avatarTop').attr('src','img/top/'+ $(this).val()+'.png');

            }else{
                // console.log('Modification du style Bottom');
                 // Modifier la valeur de l'attribut src de avatarTOP : 
                $('#avatarBottom').attr('src','img/bottom/'+ $(this).val()+'.png');

            };
    


        });

    // Capter la soumission du formulaire :
    $('form').submit(function(evt){
        // console.log('Submit'); => Test

        // BLoquer le comportement par default du formulaire :
            evt.preventDefault();

        // Définir une variable pour la validation finale du formulaire :
        var formScore = 0;

        // Variables globales du formulaire :
            var avatarName= $('#avatarName').val();
            var avatarAge=$('#avatarAge').val();
            var avatarStyleTop=$('#avatarStyleTop').val();
            var avatarStyleBottom=$('#avatarStyleBottom').val();

        // console.log('Nom : '+ avatarName + ' - Age : '+ avatarAge+ '-Woman: '+ avatarWoman+ '- Man : ' +avatarMan+ '- Top : '+avatarStyleTop+ '- Bottom : '+ avatarStyleBottom); =>Test

        // Vérifier les champs du formulaire :
            // =>Avatar Name, mini 5 caractères :
                if(avatarName.length<5){
                    // console.log('Min 5 caractères'); =>Vérification
                    // Ajouter un message d'erreur ds le label :
                    $('[for="avatarName"] b').text('Min 5 caractères');

                } else{
                    console.log('avatarName OK');
                    // Incrémenter formScore de 1:
                    formScore++;
                };

            // => Avatar Age en 1 et 100 :
                if(avatarAge ==0 || avatarAge>100 || avatarAge.length==0){
                    console.log('avatarAge entre 1 et 100');
                    $('[for="avatarAge"] b').text('entre 1 et 100');
                } else{
                    console.log('avatarAge OK ');
                    // Incrémenter formScore de 1:
                    formScore++;
                };
                
            // => Avatar avatarStyleTop obligatoire :
                if (avatarStyleTop=='null'){
                    console.log('Vous devez choisir un avatarStyleTop');
                    $('[for="avatarStyleTop"] b').text('Vous devez choisir un style pour le haut');
                }else{
                    console.log('avatarStyleTop OK');
                    // Incrémenter formScore de 1:
                    formScore++;
                };
        
        // => Avatar avatarStyleBottom obligatoire :
                if (avatarStyleTop=='null'){
                    console.log('Vous devez choisir un avatarStyleBottom');
                     $('[for="avatarStyleBottom"] b').text('Vous devez choisir un style pour le bas');
                }else{
                    console.log('avatarStyleBottom OK');
                    // Incrémenter formScore de 1:
                    formScore++;
                };
        
        // => Genre de l'avatar : vérifier la valeur
            if(avatarGender ==undefined){
               console.log('Vous devez choisir un genre !')
                $('.labelGender b').text('Vous devez choisir un genre !');
            }else {
                console.log('avatarGender OK');
                 // Incrémenter formScore de 1:
                formScore++;
            };

        // Vérifier la valeur de la variable formScore
        if(formScore==5){
            console.log('Le formulaire est validé !');
            // => Envoyer les données du formulaire et attendre la réponse du server en Ajax
            // => Le serveur répond true 

            // => Ajouter une ligne dans ke tableau html :
            $('table').append(''+
                 '<tr>'+
                    '<td><b>'+avatarName+' </b></td>'+
                    '<td>'+avatarAge+'</td>'+
                    '<td>'+avatarGender+'</td>'+
                    '<td>'+avatarStyleTop+','+avatarStyleBottom+'</td>'+
                '</tr>'
             );
            

            // Ajouter l'avatar dans le tableau JS :

            myTown.push({
                name: avatarName,
                gender: avatarGender,
                age: parseInt(avatarAge),
                top: avatarStyleTop,
                bottom: avatarStyleBottom
            });

            // => Vider tous les champs du formulaire :
            $('form')[0].reset();
            
            // => Revenir aux valeurs 'null' pour l'avatar :
            $('#avatarBody').attr('src','img/null.png');
            $('#avatarTop').attr('src','img/top/null.png');
            $('#avatarBottom').attr('src','img/bottom/null.png');  

            //  Affciher les données du  tableau dans la console : 
            console.log(myTown.length);

            // Affciher la taille totale de la ville dans le #totalSims :
            $('#totalSims').text(myTown.length);
            $('#simsWoman b, #simsMan b').text('/'+myTown.length);

            // Définir les variables globales pour les statistiques :
            var totalGirls=0;
            var totalBoys=0;
            var totalAge =0;

            // Faire une boucle for sur myTown connaitre les statistiques :

            for( var i=0; i< myTown.length; i++){

               console.log(myTown[i].gender);
                // conditions pour le gender :
                if(myTown[i].gender=='girl'){
                    totalGirls++;
                }else{
                    totalBoys++;
                }

                // Additionner les ages :
                totalAge+= myTown[i].age;
            };


            // Afficher dans le tableau HTML le nombre de girl et le nombre de boys :
            $('#simsWoman').html(totalGirls+'<b>/'+myTown.length+'</b>');
            $('#simsMan').html(totalBoys+'<b>/'+myTown.length+'</b>');

            // Affciher l'age Moyen dans la console :
            var ageAmoutRounded = Math.round(totalAge/ myTown.length);
            $('#simsAgeAmount').html(ageAmoutRounded + '<b>ans</b>') ;
            
        };

    });


}); //Fin de la fonction chargement. 

