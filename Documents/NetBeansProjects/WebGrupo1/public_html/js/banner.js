/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var banners = ["img/casa-destaque2.jpg","img/casa-destaque3.jpg"];
var bannerAtual = 0;

function trocaBanner()
{
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 1000);