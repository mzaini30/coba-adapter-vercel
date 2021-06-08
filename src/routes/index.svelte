<p>Masukkan Nama:</p>
<input type="text" bind:value={nama}>
<p>Hai {nama}</p>
<p><a href="/{nama}">Klik untuk menuju ke {nama}</a></p>

<script>
	let nama = 'kucing'
</script>