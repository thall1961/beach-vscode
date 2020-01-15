export function msToTime(ms) {
  const d = new Date(null);
  d.setMilliseconds(ms);
  return d.toLocaleDateString('en-US');
}

export function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('');
      })
      // join the parapgraphs leaving split by two linebreaks
      .join('\n\n')
  );
}

export function resetUrl() {
  if (typeof document === 'object') {
    if (document.location.href.includes('?')) {
      let location = document.location.href.split('?');
      console.log(location);
      document.location.href = `/thank-you`;
    }
  }
}

export function stripPhone(value) {
  if (typeof value !== 'string') {
    return '';
  }
  return value.replace(/\D/g, '');
  // *** for US number format ***
  // let areaCode = stripped.substring(0, 3);
  // let firstThree = stripped.substring(3, 6);
  // let lastFour = stripped.substring(6, 10);
  // let newFormat = `(${String(areaCode)}) ${String(firstThree)}-${String(
  //   lastFour
  // )}`;
  // setPhone(newFormat);
}

export function goToThankYou() {
  if (typeof window !== `undefined`) window.location.replace(`/thank-you`);
}

export function goToNewPage(pathname) {
  if (typeof window !== `undefined`) window.location.replace(pathname);
}
