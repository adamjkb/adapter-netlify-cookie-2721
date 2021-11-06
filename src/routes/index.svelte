<script>
	import { browser } from '$app/env';
	import { session } from '$app/stores';


	if (browser && !$session.username) {
		document.cookie = 'kit_username=user1; expires=Tue, 18 Dec 2022 12:00:00 UTC;';
	}
</script>

<h1>
	{#if $session.username}
	Welcome back, {$session.username}!
	{:else}
	Welcome unknown user!
	{/if}
</h1>
