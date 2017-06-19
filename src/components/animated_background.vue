<template>
	<div class="animated-background">
        <p>Hello</p>
	</div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
$base1: hsla(153, 50%, 98%, 1);
$base2: hsla(211, 28%, 29%, 1);

body{

    $yellow: hsla(0, 0%, 80%,1);
    $yellow2: hsla(0, 0%, 84%, 1);
    $yellow3: rgba(240,166,17,0);
    background:
        radial-gradient(circle farthest-side at 0% 50%, $yellow2 23.5%, $yellow3 0)21px 30px,
        radial-gradient(circle farthest-side at 0% 50%, $yellow 24%, $yellow3 0) 19px 30px,
        linear-gradient($yellow2 14%, $yellow3 0, $yellow3 85%, $yellow2 0)0 0,
        linear-gradient(150deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
        linear-gradient(30deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
        linear-gradient(90deg,$yellow 2%,$yellow2 0,$yellow2 98%,$yellow 0%)0 0 $yellow2;
    background-size:40px 60px;
   // animation: 10s linear scroll infinite;
}

@keyframes scroll{
  100%{
    background-position:0px -3000px;
  }
}
</style>


