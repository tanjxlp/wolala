<template>
	<div>
		<div style="width: 7.5rem;height: 1rem;background: gainsboro;position: relative;">
			<p style="font-size: 0.4rem;position:absolute ;left: 45%;">对话</p>
			<p style="font-size: 0.35rem;position:absolute ;left: 43%;top: 0.4rem;">wolala</p>
		</div>
		<ul id="talkContent" style="overflow-y: ;width: 7.5rem;height: 11.1rem;background:none;position: relative;">
			<li>
				<p class="talkTitle">Steve</p>
				<p class="talkContainet">Hi lptanjx,你离wolala会...</p>
				<p class="talkDate">3天前</p>
			</li>
			<li>
				<p class="talkTitle">Steve</p>
				<p class="talkContainet">Hi lptanjx,咦？你知道wola...</p>
				<p class="talkDate">一周前</p>
			</li>
			<li>
				<p class="talkTitle">Steve</p>
				<p class="talkContainet">Hi lptanjx,强烈推荐！喜欢...</p>
				<p class="talkDate">一周前</p>
			</li>
			<li>
				<p class="talkTitle">Steve</p>
				<p class="talkContainet">Hi lptanjx,欢迎来到汇聚亚洲...</p>
				<p class="talkDate">一周前</p>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	#talkContent>li{list-style: none;width: 7.5rem;height: 1.3rem;border: 1px solid gainsboro;position: relative;}
	.talkTitle{font-size: 0.6rem;position: absolute;left: 0.1rem;}
	.talkContainet{font-size: 0.45rem;position: absolute;left: 0.8rem;top: 0.6rem;}
	.talkDate{font-size: 0.4rem;position: absolute;right: 0.1rem;top: 0.2rem;}
</style>