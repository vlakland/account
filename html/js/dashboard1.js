 $(document).ready(function () {
     "use strict";
     // toat popup js
     $.toast({
         heading: 'Welcome to Adand admin',
         text: '데이터를 불러오고 있습니다.',
         position: 'bottom-right',
         loaderBg: '#fff',
         icon: 'warning',
         hideAfter: 3500,
         stack: 6
     })


     //ct-visits
     new Chartist.Line('#ct-visits', {
         labels: ['12-03', '12-04', '12-05', '12-06', '12-07', '12-08', '12-09', '12-10'],
         series: [
    [6, 4, 4, 4, 5, 6, 6, 6]
    , [10, 8, 9, 8, 6, 12, 10, 8]
    , [2, 1, 2, 4, 5, 0, 1, 0]
  ]
     }, {
         top: 0,
         low: 1,
         showPoint: true,
         fullWidth: true,
         plugins: [
    Chartist.plugins.tooltip() 
  ],
         axisY: {
            scaleMinSpace: 25,
            onlyInteger: true,
             labelInterpolationFnc: function (value) {
                 return (value / 1);
             }
         },
     })
     
     ;
     // counter
   
     var sparklineLogin = function () {
         $('#sparklinedash').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#7ace4c'
         });
         $('#sparklinedash2').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#7460ee'
         });
         $('#sparklinedash3').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#11a0f8'
         });
         $('#sparklinedash4').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#f33155'
         });
     }
     var sparkResize;
     $(window).on("resize", function (e) {
         clearTimeout(sparkResize);
         sparkResize = setTimeout(sparklineLogin, 500);
     });
     sparklineLogin();
 });
