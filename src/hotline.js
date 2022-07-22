"use strict"

const fs = require("fs");
/*const md5 = require("crypto-js/md5");
const sha1 = require("crypto-js/sha1");*/

/** Transaction type */
const myTran =
{
	Error: 100,
	GetMsgs: 101,
	NewMsg: 102,
	OldPostNews: 103,
	ServerMsg: 104,
	ChatSend: 105,
	ChatMsg: 106,
	Login: 107,
	SendInstantMsg: 108,
	ShowAgreement: 109,
	DisconnectUser: 110,
	DisconnectMsg: 111,
	InviteNewChat: 112,
	InviteToChat: 113,
	RejectChatInvite: 114,
	JoinChat: 115,
	LeaveChat: 116,
	NotifyChatChangeUser: 117,
	NotifyChatDeleteUser: 118,
	NotifyChatSubject: 119,
	SetChatSubject: 120,
	Agreed: 121,
	ServerBanner: 122,
	GetFileNameList: 200,
	DownloadFile: 202,
	UploadFile: 203,
	DeleteFile: 204,
	NewFolder: 205,
	GetFileInfo: 206,
	SetFileInfo: 207,
	MoveFile: 208,
	MakeFileAlias: 209,
	DownloadFldr: 210,
	DownloadInfo: 211,
	DownloadBanner: 212,
	UploadFldr: 213,
	GetUserNameList: 300,
	NotifyChangeUser: 301,
	NotifyDeleteUser: 302,
	GetClientInfoText: 303,
	SetClientUserInfo: 304,
	NewUser: 350,
	DeleteUser: 351,
	GetUser: 352,
	SetUser: 353,
	UserAccess: 354,
	UserBroadcast: 355,
	GetNewsCatNameList: 370,
	GetNewsArtNameList: 371,
	DelNewsItem: 380,
	NewNewsFldr: 381,
	GetNewsArtData: 400,
	PostNewsArt: 410,
	DelNewsArt: 411,
	KeepConnectionAlive: 500
}

/** Transaction field type */
const myField =
{
	ErrorText: 100,
	Data: 101,
	UserName: 102,
	UserID: 103,
	UserIconID: 104,
	UserLogin: 105,
	UserPassword: 106,
	RefNum: 107,
	TransferSize: 108,
	ChatOptions: 109,
	UserAccess: 110,
	UserAlias: 111,
	UserFlags: 112,
	Options: 113,
	ChatID: 114,
	ChatSubject: 115,
	WaitingCount: 116,
	ServerAgreement: 150,
	ServerBanner: 151,
	ServerBannerType: 152,
	ServerBannerUrl: 153,
	NoServerAgreement: 154,
	Version: 160,
	CommunityBannerID: 161,
	ServerName: 162,
	FileNameWithInfo: 200,
	FileName: 201,
	FilePath: 202,
	FileResumeData: 203,
	FileXferOptions: 204,
	FileTypeString: 205,
	FileCreatorString: 206,
	FileSize: 207,
	FileCreateDate: 208,
	FileModifyDate: 209,
	FileComment: 210,
	FileNewName: 211,
	FileNewPath: 212,
	FileType: 213,
	QuotingMsg: 214,
	AutomaticResponse: 215,
	FldrItemCount: 220,
	UserNameWithInfo: 300,
	NewsCatGUID: 319,
	NewsCatListData: 320, // obsolete, not used, ignored
	NewsArtListData: 321,
	NewsCatName: 322,
	NewsCatListData15: 323,
	NewsPath: 325,
	NewsArtID: 326,
	NewsArtDataFlav: 327,
	NewsArtTitle: 328,
	NewsArtPoster: 329,
	NewsArtDate: 330,
	NewsArtPrevArt: 331,
	NewsArtNextArt: 332,
	NewsArtData: 333,
	NewsArtFlags: 334,
	NewsArtParentArt: 335,
	NewsArt1stChildArt: 336,
	NewsArtRecurseDel: 337
}

/** User account */
class Account
{
	/**
	 * @constructor
	 * @param {string} name - Account display name
	 * @param {string} login - Account login name
	 * @param {string} password - Account password
	*/
	constructor(name, login, password = "")
	{
		this.name = name;
		this.login = login;
		this.password = password;
	}

	/** Returns the encoded password */
	get password()
	{
		return this._password;
	}

	/** Sets the encoded password */
	set password(newPassword)
	{
		this._password = [];

		for (let i = 0; i < newPassword.length; i++)
			this._password.push(newPassword.charCodeAt(i) ^ 255);
	}
}

/** File object */
class File
{
	/**
	 * Loads a file on the host system and generates the necessary info
	 * @constructor
	 * @param {fs.PathOrFileDescriptor} id - File path or descriptor
	*/
	constructor(id)
	{
		this._id = id; 
	}
}

exports =
{
	myTran,
	myField,
	Account,
	File
}
