"use strict"

/** Client header constants */
const HTLC_HDR =
{
	ICON_GETLIST: 0x745,
	ICON_SET: 0x746,
	ICON_GET: 0x747,
	FILE_HASH: 0xEE0
}

/** Client data constants */
const HTLC_DATA =
{
	ICON_GIF: 0x300,
	SESSIONKEY: 0xE03,
	MAC_ALG: 0xE04,
	HASH_MD5: 0xE80,
	HASH_HAVAL: 0xE81,
	HASH_SHA1: 0xE82,
	CHAT_AWAY: 0xEA1,
	CIPHER_ALG: 0xEC2,
	CIPHER_MODE: 0xEC4,
	CIPHER_IVEC: 0xEC6
}

/** Server header constants */
const HTLS_HDR =
{
	ICON_CHANGE: 0x748,
}

/** Server data constants */
const HTLS_DATA =
{
	ICON_GIF: 0x300,
	ICON_LIST: 0x301,
	COLOR: 0x500,
	ICON_CHANGE: 0x748,
	SESSIONKEY: 0xE03,
	MAC_ALG: 0xE04,
	HASH_MD5: 0xE80,
	HASH_HAVAL: 0xE81,
	HASH_SHA1: 0xE82,
	ICON_CICN: 0xE90,
	CIPHER_ALG: 0xEC1,
	CIPHER_MODE: 0xEC3,
	CIPHER_IVEC: 0xEC5
}

exports =
{
	HTLC_HDR,
	HTLC_DATA,
	HTLS_HDR,
	HTLS_DATA
}
