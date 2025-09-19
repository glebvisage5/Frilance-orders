<script>
    import style from './Chart.module.scss';
    export let data = [];

    const widthVW = 23.49;
    const heightVW = 14.43;
    const paddingVW = 5.31;
    const lineLengthVW = 15.83;

    const minY = Math.min(...data.map(d => d.value));
    const maxY = Math.max(...data.map(d => d.value));

    const scaleX = (index) => paddingVW + (index / (data.length - 1)) * (widthVW - 2 * paddingVW);
    const scaleY = (value) => heightVW - 2.45 - ((value - minY) / (maxY - minY)) * (heightVW - 2 * 2.45);
</script>

<svg class={style.SVG} style={`width: ${widthVW}vw; height: ${heightVW}vw;`}>
    {#each Array(4) as _, i}
        <line x1={`${paddingVW}vw`} 
              y1={`${scaleY(minY + (maxY - minY) * (i / 3))}vw`} 
              x2={`${paddingVW + lineLengthVW}vw`} 
              y2={`${scaleY(minY + (maxY - minY) * (i / 3))}vw`} 
              class={style.gridLine} />
    {/each}

    <polyline 
        points={data.map((d, i) => `${scaleX(i)*14.9},${scaleY(d.value)*14.9}`).join(" ")} 
        class={style.chartLine} 
        stroke-width="0.2vw"
    />

    {#each data as d, i}
        <circle cx={`${scaleX(i)}vw`} cy={`${scaleY(d.value)}vw`} r="0.26vw" class={style.point} />
    {/each}

    {#each data as d, i}
        <text x={`${scaleX(i)}vw`} y={`${heightVW - 1.16}vw`} class={style.arr_text} text-anchor="middle">{d.label}</text>
    {/each}

    {#each Array(4) as d, i}
        <text x="2.26vw" y={`${scaleY(minY + (maxY - minY) * (i / 3))}vw`} class={style.arr_text}>{data[i] ? data[i].info : ""}</text>
    {/each}
</svg>
