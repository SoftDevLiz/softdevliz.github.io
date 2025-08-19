import React from "react";

const images = [

    {
      src: "/assets/3DGithub.png",
      alt: "Github Logo",
      link: "https://github.com/SoftDevLiz",
    },
    {
      src: "/assets/3DLinkedIn.png",
      alt: "LinkedIn Logo",
      link: "https://www.linkedin.com/in/liezlmouton/",
    },
    {
      src: "/assets/3DCv.png",
      alt: "Download CV Icon"
    }
  
  ]

const handleClick = (image) => {
	if (image && image.link) {
		window.open(image.link, '_blank', 'noopener,noreferrer')
	}
}

function Socials() {
	const [copied, setCopied] = React.useState(false)
	const copyTimerRef = React.useRef(null)
	const [toastPos, setToastPos] = React.useState({ x: 0, y: 0 })

	const copyEmailToClipboard = React.useCallback((e) => {
		if (e && e.clientX != null && e.clientY != null) {
			setToastPos({ x: e.clientX + 12, y: e.clientY + 12 })
		}
		const email = 'lizmouton1@gmail.com'
		const doToast = () => {
			setCopied(true)
			if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
			copyTimerRef.current = setTimeout(() => setCopied(false), 1200)
		}
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(email)
				.then(doToast)
				.catch(() => doToast())
			return
		}
		const textarea = document.createElement('textarea')
		textarea.value = email
		textarea.setAttribute('readonly', '')
		textarea.style.position = 'absolute'
		textarea.style.left = '-9999px'
		document.body.appendChild(textarea)
		textarea.select()
		try { document.execCommand('copy') } finally { document.body.removeChild(textarea) }
		doToast()
	}, [])
    return (
        <div className="socials-section">
            <h2>Links</h2>
            <div className="socials-row">
                {images.map((image) => (
                    <button
                        key={image.alt}
                        type="button"
                        className="socials-button"
                        onClick={() => handleClick(image)}
                        disabled={!image.link}
                        aria-label={image.alt}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </button>
                ))}
                <h3 className="contact-phone">061 286 7521</h3>
                <button
                    type="button"
                    className="contact-email"
                    onClick={(e) => copyEmailToClipboard(e)}
                    aria-label="Copy email address"
                >
                    lizmouton1@gmail.com
                </button>
            </div>
            {copied && (
                <div
                    className="copy-toast"
                    role="status"
                    aria-live="polite"
                    style={{ top: toastPos.y + 'px', left: toastPos.x + 'px', right: 'auto' }}
                >
                    Copied to clipboard
                </div>
            )}
        </div>
    )
}

export default Socials;

