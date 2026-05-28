<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">


    <div class="flex flex-wrap justify-between gap-8">

        <!--this is about footer-->
        <div>
    
            <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
            <p class="text-sm text-green-200">Discover the.beauty.of.the.land.of.thousand.hills</p>
    </div>
        <!--Quick links-->
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick links</h3>
            <ul class="space-y-2 text-sm">
                <li><routerLink to="/"class="text-green-200 hover:text-yellow-300">Home</routerLink></li>
                <li><routerLink to="/About"class="text-green-200 hover:text-yellow-300">About</routerLink></li>
                <li><routerLink to="/service"class="text-green-200 hover:text-yellow-300">service</routerLink></li>
                <li><routerLink to="/contact"class="text-green-200 hover:text-yellow-300">contact</routerLink></li>

            </ul>
        </div>
        <!--destinations-->
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
            <ul class="space-y-2 text-sm">
                <li><routerLink to="/North"class="text-green-200 hover:text-yellow-300">Northern Province</routerLink></li>
                <li><routerLink to="/South"class="text-green-200 hover:text-yellow-300">Southern Province</routerLink></li>
                <li><routerLink to="/West"class="text-green-200 hover:text-yellow-300">Western Province</routerLink></li>
                <li><routerLink to="/East"class="text-green-200 hover:text-yellow-300">Eastern Province</routerLink></li>
                <li><routerLink to="/Kigali"class="text-green-200 hover:text-yellow-300">Kigali City</routerLink></li>
                </ul>
        </div>
        <!--Contact Info-->
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact Info</h3>
            <ul class="space-y-2 text-sm text-green-200">
                <li>ahantunyaburanga@gmail.com</li>
                <li>+0788899986535272</li>
                <li>Kagugu</li>
                </ul>
        </div>

    </div>
<!--place for copywright-->
<div class="border-t border-black-600 mt-8 pt-4 text-sm text-white-600">
    <p class="text-center">&copy: 2025 Visit Rwanda.All rights reserved Alpha bryan</p>

</div>
</footer>

</template>