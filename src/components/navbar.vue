<template>
    <nav class="bg-green-800 text-white px-8 py-2  flex items-center justify-between shadow-lg w-full">
    <img src=" ../assets/logo.jpg" alt="logo" class="h-10">
    <ul class="flex gap-8 text-sm font-medium justify-end">
    <li> <a href="/" class="hover:text-yellow-300">Home</a></li>
    <li> <a href="/About" class="hover:text-yellow-300">About us</a></li>
    <li> <a href="/service" class="hover:text-yellow-300">Service</a></li>

    <li class="relative group">
     <a href="#" class="hover:text-yellow-300">Gallery <span>^</span></a>
    <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top left-0 z-50">
    <li> <a href="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">photos</a></li>
    <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">videos</a></li>   
    </ul> 
    </li>

    
      <li class="relative group">
      <a href="#" class="hover:text-yellow-300">Destinations<span>^</span></a>
            <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-black rounded shadow-lg w-48 top-full left-0 z-50">                           
                <li><a href="/North"class="text-black hover:text-yellow-300">Northern Province</a></li>
<li><a href="/South"class="text-black hover:text-yellow-300">Southern Province</a></li>
<li><a href="/West"class="text-black hover:text-yellow-300">Western Province</a></li>
<li><a href="/East"class="text-black hover:text-yellow-300">Eastern Province</a></li>
<li><a href="/Kigali"class="text-black hover:text-yellow-300">Kigali City</a></li>
</ul>
</li>

     
    <li> <a href="/contacts" class="hover:text-yellow-300">Contacts</a></li>
    </ul>
    </nav>
    </template>