using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class _6thCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BodyDatas");

            migrationBuilder.CreateTable(
                name: "BlogDatas",
                columns: table => new
                {
                    Type = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BlogItemId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogDatas", x => x.Type);
                    table.ForeignKey(
                        name: "FK_BlogDatas_BlogItems_BlogItemId",
                        column: x => x.BlogItemId,
                        principalTable: "BlogItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CaseStudyPostDatas",
                columns: table => new
                {
                    Type = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CaseStudyPostItemId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CaseStudyPostDatas", x => x.Type);
                    table.ForeignKey(
                        name: "FK_CaseStudyPostDatas_CaseStudyPostItems_CaseStudyPostItemId",
                        column: x => x.CaseStudyPostItemId,
                        principalTable: "CaseStudyPostItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OwnDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExperienceDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Facebook = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Twitter = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Instagram = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Linkedin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ServicesDatas",
                columns: table => new
                {
                    ImagePath = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServicesItemId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServicesDatas", x => x.ImagePath);
                    table.ForeignKey(
                        name: "FK_ServicesDatas_ServicesItems_ServicesItemId",
                        column: x => x.ServicesItemId,
                        principalTable: "ServicesItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CommentItem",
                columns: table => new
                {
                    Text = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClientsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommentItem", x => x.Text);
                    table.ForeignKey(
                        name: "FK_CommentItem_Clients_ClientsId",
                        column: x => x.ClientsId,
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogDatas_BlogItemId",
                table: "BlogDatas",
                column: "BlogItemId");

            migrationBuilder.CreateIndex(
                name: "IX_CaseStudyPostDatas_CaseStudyPostItemId",
                table: "CaseStudyPostDatas",
                column: "CaseStudyPostItemId");

            migrationBuilder.CreateIndex(
                name: "IX_CommentItem_ClientsId",
                table: "CommentItem",
                column: "ClientsId");

            migrationBuilder.CreateIndex(
                name: "IX_ServicesDatas_ServicesItemId",
                table: "ServicesDatas",
                column: "ServicesItemId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogDatas");

            migrationBuilder.DropTable(
                name: "CaseStudyPostDatas");

            migrationBuilder.DropTable(
                name: "CommentItem");

            migrationBuilder.DropTable(
                name: "ServicesDatas");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.CreateTable(
                name: "BodyDatas",
                columns: table => new
                {
                    ImagePath = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BlogItemId = table.Column<int>(type: "int", nullable: true),
                    CaseStudyPostItemId = table.Column<int>(type: "int", nullable: true),
                    ServicesItemId = table.Column<int>(type: "int", nullable: true),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BodyDatas", x => x.ImagePath);
                    table.ForeignKey(
                        name: "FK_BodyDatas_BlogItems_BlogItemId",
                        column: x => x.BlogItemId,
                        principalTable: "BlogItems",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_BodyDatas_CaseStudyPostItems_CaseStudyPostItemId",
                        column: x => x.CaseStudyPostItemId,
                        principalTable: "CaseStudyPostItems",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_BodyDatas_ServicesItems_ServicesItemId",
                        column: x => x.ServicesItemId,
                        principalTable: "ServicesItems",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BodyDatas_BlogItemId",
                table: "BodyDatas",
                column: "BlogItemId");

            migrationBuilder.CreateIndex(
                name: "IX_BodyDatas_CaseStudyPostItemId",
                table: "BodyDatas",
                column: "CaseStudyPostItemId");

            migrationBuilder.CreateIndex(
                name: "IX_BodyDatas_ServicesItemId",
                table: "BodyDatas",
                column: "ServicesItemId");
        }
    }
}
